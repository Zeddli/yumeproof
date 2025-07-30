"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({
  children,
  className,
  onClick,
}: InteractiveHoverButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-3 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
} 