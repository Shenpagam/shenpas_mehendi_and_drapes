"use client";

import React from "react";
import Image from "next/image";

export interface KolamCornerDecorationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: string;
  ariaHidden?: boolean;
}

/**
 * Reusable Kolam Corner Decoration using authentic `/kolam-pattern.png`.
 * Adheres to traditional aesthetics with non-interfering positioning and responsive sizing.
 */
export default function KolamCornerDecoration({
  position = "top-left",
  className = "",
  size = "md",
  opacity = "opacity-25 sm:opacity-35",
  ariaHidden = true,
}: KolamCornerDecorationProps) {
  // Size classes preserving aspect ratio [301/601]
  const sizeClasses = {
    sm: "w-8 sm:w-12 md:w-14 lg:w-16",
    md: "w-10 sm:w-14 md:w-18 lg:w-22",
    lg: "w-12 sm:w-18 md:w-24 lg:w-28",
    xl: "w-16 sm:w-22 md:w-28 lg:w-36",
  }[size];

  // Corner positioning & horizontal flip
  const positionClasses = {
    "top-left": "top-2 sm:top-4 left-1 sm:left-3",
    "top-right": "top-2 sm:top-4 right-1 sm:right-3 scale-x-[-1]",
    "bottom-left": "bottom-2 sm:bottom-4 left-1 sm:left-3",
    "bottom-right": "bottom-2 sm:bottom-4 right-1 sm:right-3 scale-x-[-1]",
  }[position];

  return (
    <div
      aria-hidden={ariaHidden}
      className={`absolute ${positionClasses} pointer-events-none select-none z-0 ${opacity} transition-opacity duration-300 ${className}`}
    >
      <div className={`relative ${sizeClasses} aspect-[301/601]`}>
        <Image
          src="/images/kolam-trimmed.png"
          alt="Traditional Kolam Decoration"
          fill
          sizes="(max-width: 640px) 50px, (max-width: 1024px) 90px, 120px"
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
