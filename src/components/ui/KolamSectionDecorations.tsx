"use client";

import React from "react";
import Image from "next/image";

export interface KolamSectionDecorationsProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: string;
  maxWidth?: string;
  ariaHidden?: boolean;
}

/**
 * Centered, symmetrical two-Kolam decoration system for website sections.
 * Replaces the four-corner arrangement with exactly TWO balanced kolam patterns
 * flanking the section sides, vertically centered using flexbox alignment.
 */
export default function KolamSectionDecorations({
  className = "",
  size = "md",
  opacity = "opacity-30 sm:opacity-40",
  maxWidth = "max-w-[1440px]",
  ariaHidden = true,
}: KolamSectionDecorationsProps) {
  const sizeClasses = {
    sm: "w-7 sm:w-10 md:w-12 lg:w-14",
    md: "w-8 sm:w-12 md:w-16 lg:w-18",
    lg: "w-10 sm:w-14 md:w-18 lg:w-22",
    xl: "w-12 sm:w-16 md:w-22 lg:w-26",
  }[size];

  return (
    <div
      aria-hidden={ariaHidden}
      className={`absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className={`w-full ${maxWidth} px-2 sm:px-4 lg:px-6 flex items-center justify-between`}>
        {/* Left Symmetrical Kolam Decoration */}
        <div className={`relative ${sizeClasses} aspect-[301/601] ${opacity} transition-opacity duration-300`}>
          <Image
            src="/images/kolam-trimmed.png"
            alt="Traditional Kolam Decoration Left"
            fill
            sizes="(max-width: 640px) 40px, (max-width: 1024px) 80px, 110px"
            className="object-contain"
          />
        </div>

        {/* Right Symmetrical Kolam Decoration (Horizontally Mirrored) */}
        <div className={`relative ${sizeClasses} aspect-[301/601] ${opacity} scale-x-[-1] transition-opacity duration-300`}>
          <Image
            src="/images/kolam-trimmed.png"
            alt="Traditional Kolam Decoration Right"
            fill
            sizes="(max-width: 640px) 40px, (max-width: 1024px) 80px, 110px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
