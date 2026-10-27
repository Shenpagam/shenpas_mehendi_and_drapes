"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomDatePickerProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (dateStr: string) => void;
  required?: boolean;
  disabled?: boolean;
  minDate?: string;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Helper to format ISO date "YYYY-MM-DD"
function formatToISO(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

// Helper to format display date (e.g. "28 Oct 2026")
function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return dateStr;
  
  const shortMonth = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ][month];
  return `${day} ${shortMonth} ${year}`;
}

export default function CustomDatePicker({
  id = "event-date",
  name = "eventDate",
  value,
  onChange,
  required = false,
  disabled = false,
  minDate,
  placeholder = "Select your event date",
  ariaLabel = "Event date selector",
  className = "",
}: CustomDatePickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [todayISO, setTodayISO] = useState<string>("");

  // User-navigated month & year (null when tracking current selection/default)
  const [navYear, setNavYear] = useState<number | null>(null);
  const [navMonth, setNavMonth] = useState<number | null>(null);

  // Derived base month & year from value
  const parsedValue = React.useMemo(() => {
    if (!value) return null;
    const parts = value.split("-");
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      if (!isNaN(y) && !isNaN(m)) return { year: y, month: m };
    }
    return null;
  }, [value]);

  // Current view year & month (derived without setState in effect)
  const viewYear = navYear ?? parsedValue?.year ?? 2026;
  const viewMonth = navMonth ?? parsedValue?.month ?? 9; // October (0-indexed)

  const effectiveMin = minDate !== undefined ? minDate : todayISO;

  const handleToggleOpen = () => {
    if (disabled) return;
    if (!isOpen) {
      const now = new Date();
      const currentISO = formatToISO(now.getFullYear(), now.getMonth(), now.getDate());
      setTodayISO(currentISO);
      if (!parsedValue && navYear === null) {
        setNavYear(now.getFullYear());
        setNavMonth(now.getMonth());
      }
    }
    setIsOpen((prev) => !prev);
  };

  // Handle click outside & escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Calendar calculations
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  // Navigation handlers
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setNavMonth(11);
      setNavYear(viewYear - 1);
    } else {
      setNavMonth(viewMonth - 1);
      setNavYear(viewYear);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setNavMonth(0);
      setNavYear(viewYear + 1);
    } else {
      setNavMonth(viewMonth + 1);
      setNavYear(viewYear);
    }
  };

  const handleSelectDay = (day: number) => {
    const iso = formatToISO(viewYear, viewMonth, day);
    onChange(iso);
    setIsOpen(false);
  };

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    onChange("");
    setNavYear(null);
    setNavMonth(null);
  };

  const handleSelectToday = () => {
    const now = new Date();
    const currentISO = formatToISO(now.getFullYear(), now.getMonth(), now.getDate());
    onChange(currentISO);
    setNavYear(now.getFullYear());
    setNavMonth(now.getMonth());
    setTodayISO(currentISO);
    setIsOpen(false);
  };

  // Check if prev month navigation should be disabled if before minDate
  const isPrevDisabled = (() => {
    if (!effectiveMin) return false;
    const parts = effectiveMin.split("-");
    const minY = parseInt(parts[0], 10);
    const minM = parseInt(parts[1], 10) - 1;
    return viewYear < minY || (viewYear === minY && viewMonth <= minM);
  })();

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden native input for required form validation & Formspree submission */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
      />
      {required && (
        <input
          type="text"
          required
          tabIndex={-1}
          aria-hidden="true"
          value={value}
          onChange={() => {}}
          className="sr-only opacity-0 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1"
        />
      )}

      {/* Styled Interactive Trigger Field */}
      <button
        type="button"
        id={`${id}-trigger`}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={handleToggleOpen}
        className={`w-full bg-[#FAF6ED] border ${
          isOpen ? "border-[#8F164C] ring-1 ring-[#8F164C]/30" : "border-[#B99A72]/50 hover:border-[#8F164C]/70"
        } px-4 py-3 text-[14px] text-left flex items-center justify-between transition-all select-none disabled:opacity-60 disabled:cursor-not-allowed`}
        style={{
          fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
        }}
      >
        <span className={value ? "text-[#75451F] font-medium" : "text-[#75451F]/40"}>
          {value ? formatDisplayDate(value) : placeholder}
        </span>

        <div className="flex items-center gap-2 shrink-0">
          {value && !disabled && (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear date"
              onClick={handleClear}
              onKeyDown={(e) => e.key === "Enter" && handleClear()}
              className="text-[#75451F]/60 hover:text-[#8F164C] text-[12px] p-0.5 rounded transition-colors"
            >
              ✕
            </span>
          )}

          {/* Elegant Traditional Calendar Icon */}
          <svg
            className={`w-4 h-4 transition-colors ${
              isOpen || value ? "text-[#8F164C]" : "text-[#B99A72]"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </button>

      {/* Modern Custom-Styled Calendar Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Event date picker calendar"
            className="absolute top-[calc(100%+6px)] left-0 sm:left-auto right-0 sm:right-auto sm:w-[320px] bg-[#FCF9EA] border-[1.5px] border-[#B99A72]/60 rounded-xl shadow-2xl z-50 p-4 select-none"
            style={{
              backgroundColor: "#FCF9EA",
              boxShadow: "0 18px 40px -6px rgba(117, 69, 31, 0.25), 0 8px 16px -4px rgba(143, 22, 76, 0.12)",
            }}
          >
            {/* Top gold corner accent */}
            <div className="absolute top-0 left-0 w-6 h-[2px] bg-[#B99A72]" />
            <div className="absolute top-0 left-0 w-[2px] h-6 bg-[#B99A72]" />
            <div className="absolute top-0 right-0 w-6 h-[2px] bg-[#B99A72]" />
            <div className="absolute top-0 right-0 w-[2px] h-6 bg-[#B99A72]" />

            {/* Calendar Header: Month, Year, and Navigation Arrows */}
            <div className="flex items-center justify-between mb-3 px-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isPrevDisabled}
                aria-label="Previous month"
                className="w-8 h-8 rounded-full border border-[#B99A72]/40 flex items-center justify-center text-[#75451F] hover:text-[#8F164C] hover:border-[#8F164C] hover:bg-[#8F164C]/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-95"
              >
                <span className="text-xs font-bold">‹</span>
              </button>

              <div className="text-center">
                <span
                  className="text-[18px] sm:text-[19px] font-bold text-[#8F164C] tracking-wide"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-8 h-8 rounded-full border border-[#B99A72]/40 flex items-center justify-center text-[#75451F] hover:text-[#8F164C] hover:border-[#8F164C] hover:bg-[#8F164C]/5 transition-all active:scale-95"
              >
                <span className="text-xs font-bold">›</span>
              </button>
            </div>

            {/* Subtle Divider */}
            <div className="w-full h-[1px] bg-[#B99A72]/25 mb-2.5" />

            {/* Weekdays Row */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {WEEKDAY_NAMES.map((weekday) => (
                <div
                  key={weekday}
                  className="text-[10px] font-bold uppercase tracking-wider text-[#B99A72]"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  {weekday}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* Empty padding cells for preceding days */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="w-9 h-9" />
              ))}

              {/* Month Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const iso = formatToISO(viewYear, viewMonth, day);
                const isSelected = value === iso;
                const isToday = todayISO === iso;
                const isPast = effectiveMin ? iso < effectiveMin : false;

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleSelectDay(day)}
                    className={`w-9 h-9 rounded-lg text-[13px] flex items-center justify-center transition-all select-none relative ${
                      isSelected
                        ? "bg-[#8F164C] text-[#FCF9EA] font-bold shadow-md scale-105"
                        : isPast
                        ? "text-[#75451F]/25 cursor-not-allowed pointer-events-none"
                        : "text-[#75451F] hover:bg-[#8F164C]/15 hover:text-[#8F164C] active:scale-95 font-medium"
                    } ${isToday && !isSelected ? "border border-[#B99A72] font-semibold" : ""}`}
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#B99A72]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions: Today & Clear */}
            <div className="mt-3 pt-2.5 border-t border-[#B99A72]/25 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase">
              <button
                type="button"
                onClick={handleSelectToday}
                className="text-[#8F164C] hover:text-[#75451F] transition-colors py-1 px-1.5 rounded"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Today
              </button>

              {value && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-[#75451F]/70 hover:text-[#8F164C] transition-colors py-1 px-1.5 rounded"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Clear
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#75451F]/80 hover:text-[#8F164C] transition-colors py-1 px-1.5 rounded"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
