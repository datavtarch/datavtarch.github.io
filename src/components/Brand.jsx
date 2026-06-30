export function BrandMark({ className = '', title = 'VTARCH' }) {
  return (
    <svg
      className={`brand-mark-svg ${className}`}
      viewBox="0 0 72 72"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path className="brand-mark-mass" d="M13 59V29L25 22V59H13Z" />
      <path className="brand-mark-mass" d="M31 59V11L49 23V42L40 51V29L37 27V59H31Z" />
      <path className="brand-mark-mass" d="M44 59V48L59 33V59H50V49L47 52V59H44Z" />
      <path className="brand-mark-accent" d="M24 53L59 18" />
    </svg>
  );
}

export function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`brand-logo ${compact ? 'is-compact' : ''} ${className}`}>
      <BrandMark />
      <span className="brand-logo-text">
        <strong>VTARCH</strong>
        {!compact && <small>Diễn họa kiến trúc / AI CGI</small>}
      </span>
    </span>
  );
}
