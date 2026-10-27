"use client";

import React from "react";
import Image from "next/image";
import KolamCornerDecoration from "@/components/ui/KolamCornerDecoration";

export { KolamCornerDecoration };

interface KolamProps {
  className?: string;
  size?: number;
}

/** Full kolam pattern using authentic /kolam-pattern.png asset */
export function KolamFull({
  className = "",
}: KolamProps) {
  return (
    <div className={`relative aspect-[819/1024] pointer-events-none select-none ${className}`}>
      <Image
        src="/kolam-pattern.png"
        alt="Traditional Kolam Pattern"
        fill
        sizes="(max-width: 640px) 120px, 200px"
        className="object-contain"
      />
    </div>
  );
}

/** Small icon kolam using authentic /kolam-pattern.png asset */
export function KolamIcon({ className = "" }: KolamProps) {
  return (
    <div className={`relative inline-block w-8 h-10 pointer-events-none select-none ${className}`}>
      <Image
        src="/kolam-pattern.png"
        alt="Kolam Icon"
        fill
        sizes="32px"
        className="object-contain"
      />
    </div>
  );
}

export default KolamCornerDecoration;
