interface AccessibilityIconProps {
  className?: string
}

export function AccessibilityIcon({ className }: AccessibilityIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circle background - black in light mode, white in dark mode */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        className="fill-foreground"
      />
      {/* Human figure - white in light mode, black in dark mode */}
      <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <circle cx="12" cy="7" r="1.5" className="fill-background" />
        {/* Body */}
        <line x1="12" y1="9" x2="12" y2="14" className="stroke-background" />
        {/* Arms raised */}
        <line x1="8" y1="8" x2="12" y2="11" className="stroke-background" />
        <line x1="16" y1="8" x2="12" y2="11" className="stroke-background" />
        {/* Legs */}
        <line x1="12" y1="14" x2="9" y2="18" className="stroke-background" />
        <line x1="12" y1="14" x2="15" y2="18" className="stroke-background" />
      </g>
    </svg>
  )
}
