import React from "react";
import { cn } from "@/src/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function ShinyButton({ children, onClick, className = "", href }: ShinyButtonProps) {
  const content = (
    <span>{children}</span>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={cn("shiny-cta inline-flex items-center justify-center", className)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={cn("shiny-cta", className)} onClick={onClick}>
      {content}
    </button>
  );
}
