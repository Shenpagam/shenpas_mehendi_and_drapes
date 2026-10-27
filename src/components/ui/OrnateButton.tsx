"use client";

import React from "react";
import { motion } from "framer-motion";

export interface OrnateButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
  variant?: "maroon" | "cream";
}

/**
 * Reusable Ornate Button based on authentic traditional Indian architectural motifs.
 * Supports both Maroon (primary) and Cream (inverted) authentic ornate assets.
 * Implements smooth hover elevation (-2px lift), refined drop-shadow, tap compression (0.98),
 * accessible focus-visible outline, and smooth trailing icon translation.
 */
export default function OrnateButton({
  href,
  onClick,
  type = "button",
  children,
  className = "",
  id,
  ariaLabel,
  disabled = false,
  variant = "maroon",
}: OrnateButtonProps) {
  const isCream = variant === "cream";

  const ringColor = isCream
    ? "focus-visible:ring-[#FCF9EA]"
    : "focus-visible:ring-[#8F164C]";

  const textColor = isCream ? "text-[#8F164C]" : "text-white";

  const commonClasses = `
    group relative inline-flex items-center justify-center
    ${textColor} select-none transition-all duration-300
    focus:outline-none focus-visible:ring-2 ${ringColor} focus-visible:ring-offset-2
    ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
    ${className}
  `.trim();

  const buttonStyle: React.CSSProperties = {
    backgroundImage: isCream
      ? "url('/images/button-ornate-cream.png')"
      : "url('/images/button-ornate.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    filter: disabled
      ? "none"
      : isCream
      ? "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.32))"
      : "drop-shadow(0 4px 14px rgba(143, 22, 76, 0.28))",
  };

  const hoverFilter = isCream
    ? "drop-shadow(0 8px 22px rgba(0, 0, 0, 0.45))"
    : "drop-shadow(0 8px 22px rgba(143, 22, 76, 0.42))";

  const innerContent = (
    <span
      className={`relative z-10 px-7 sm:px-9 py-3 sm:py-3.5 flex items-center justify-center gap-2.5 text-[11px] sm:text-[11.5px] font-semibold tracking-[0.2em] uppercase ${textColor} leading-none whitespace-nowrap`}
      style={{
        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
      }}
    >
      {children}
    </span>
  );

  if (href && !disabled) {
    return (
      <motion.a
        id={id}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        whileHover={{
          y: -2,
          filter: hoverFilter,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={commonClasses}
        style={buttonStyle}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      whileHover={
        disabled
          ? undefined
          : {
              y: -2,
              filter: hoverFilter,
            }
      }
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={commonClasses}
      style={buttonStyle}
    >
      {innerContent}
    </motion.button>
  );
}
