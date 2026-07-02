export function MonogramS({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <text
        x="20"
        y="30"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="34"
        fontStyle="italic"
        fontWeight="600"
        fill="var(--gold)"
      >
        S
      </text>
    </svg>
  )
}

export function BrandLockup({ compact = false }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`}>
      <span className="brand-suitd">SUITD</span>
      <span className="brand-x">×</span>
      <span className="brand-gymskin">
        GYM<br />SKIN
      </span>
    </span>
  )
}

const iconProps = {
  fill: 'none',
  stroke: 'var(--gold)',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconTailoring({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" aria-hidden="true" {...iconProps}>
      <circle cx="16" cy="38" r="5" />
      <circle cx="36" cy="38" r="5" />
      <path d="M19.5 34.5 40 6M32.5 34.5 12 6" />
      <circle cx="26" cy="25.5" r="1.6" />
    </svg>
  )
}

export function IconDumbbell({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" aria-hidden="true" {...iconProps}>
      <path d="M17 26h18" />
      <rect x="11" y="18" width="5" height="16" rx="1" />
      <rect x="36" y="18" width="5" height="16" rx="1" />
      <rect x="5" y="21" width="4" height="10" rx="1" />
      <rect x="43" y="21" width="4" height="10" rx="1" />
    </svg>
  )
}

export function IconShield({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" aria-hidden="true" {...iconProps}>
      <path d="M26 4 8 10v14c0 12 8 20 18 24 10-4 18-12 18-24V10L26 4Z" />
      <text
        x="26"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="18"
        fontStyle="italic"
        fill="var(--gold)"
        stroke="none"
      >
        S
      </text>
    </svg>
  )
}

export function IconArrow({ size = 18 }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 22 12" aria-hidden="true" {...iconProps}>
      <path d="M0 6h20M15 1l5 5-5 5" />
    </svg>
  )
}

export function IconBag({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...iconProps} stroke="currentColor">
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </svg>
  )
}

export function IconZoom({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true" {...iconProps} stroke="currentColor">
      <circle cx="9.5" cy="9.5" r="6.5" />
      <path d="M14.5 14.5 20 20M6.5 9.5h6M9.5 6.5v6" />
    </svg>
  )
}

export function IconClose({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" {...iconProps} stroke="currentColor">
      <path d="M3 3l14 14M17 3 3 17" />
    </svg>
  )
}
