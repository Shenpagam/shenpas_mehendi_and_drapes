import React from "react";

interface SectionMotifProps {
  className?: string;
  withLines?: boolean;
  color?: string;
  accentColor?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Traditional Indian 3-petal lotus ornamental motif.
 * Used consistently across Home, About, Our Services, and Contact sections.
 */
export default function SectionMotif({
  className = "",
  withLines = true,
  color = "#8F164C",
  accentColor = "#B99A72",
  size = "md",
}: SectionMotifProps) {
  const dimensions = {
    sm: { width: 18, height: 11 },
    md: { width: 24, height: 15 },
    lg: { width: 30, height: 19 },
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      {withLines && <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" />}
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 24 15"
        fill="none"
        className="shrink-0"
      >
        {/* Left curving petal */}
        <path
          d="M10.8 13.5C7.8 13 4 10.5 2 7.5C1 6 1.8 4.8 3.2 5.5C6 7 9.5 9.5 10.8 13.5Z"
          fill={color}
        />
        {/* Right curving petal */}
        <path
          d="M13.2 13.5C16.2 13 20 10.5 22 7.5C23 6 22.2 4.8 20.8 5.5C18 7 14.5 9.5 13.2 13.5Z"
          fill={color}
        />
        {/* Center pointed teardrop petal */}
        <path
          d="M12 0.5C12 4 15 8 15 10.5C15 12.5 13.7 14 12 14C10.3 14 9 12.5 9 10.5C9 8 12 4 12 0.5Z"
          fill={color}
        />
        {/* Antique gold center jewel accent */}
        <circle cx="12" cy="13.8" r="1.2" fill={accentColor} />
      </svg>
      {withLines && <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" />}
    </div>
  );
}
