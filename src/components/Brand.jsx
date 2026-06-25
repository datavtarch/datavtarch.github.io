export function BrandMark({ className = '', title = 'VTARCH' }) {
  return (
    <svg
      className={`brand-mark-svg ${className}`}
      viewBox="0 0 64 72"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect className="brand-mark-frame" x="1" y="1" width="62" height="70" />
      <path className="brand-mark-fill" d="M16 58V14h10v44H16Z" />
      <path className="brand-mark-fill" d="M31 58V14h7.5L50 58H40L36 40.5V58h-5Z" />
      <path className="brand-mark-accent" d="M16 23H48" />
      <path className="brand-mark-accent" d="M16 51H48" />
    </svg>
  );
}

export function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`brand-logo ${compact ? 'is-compact' : ''} ${className}`}>
      <BrandMark />
      <span className="brand-logo-text">
        <strong>VTARCH</strong>
        {!compact && <small>Architecture Visualization / AI CGI</small>}
      </span>
    </span>
  );
}
