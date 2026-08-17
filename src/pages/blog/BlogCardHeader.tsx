interface BlogCardHeaderProps {
  motif: string;
  variant?: 'card' | 'hero';
  rounded?: boolean;
  className?: string;
}

export default function BlogCardHeader({
  motif,
  variant = 'card',
  rounded = true,
  className = '',
}: BlogCardHeaderProps) {
  const height = variant === 'hero' ? 'h-40 md:h-56' : 'h-28 sm:h-32';
  const roundingClass = rounded ? (variant === 'hero' ? 'rounded-2xl' : 'rounded-lg') : '';

  return (
    <div
      className={`relative w-full ${height} ${roundingClass} overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <radialGradient id={`glow-${motif}`} cx="82%" cy="14%" r="65%">
            <stop offset="0%" stopColor="#BF9B5E" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#BF9B5E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="160" fill={`url(#glow-${motif})`} />
        {motif === 'branch-merge' ? <BranchMergeMotif /> : <LinesMotif />}
        <rect x="40" y="150" width="44" height="3" rx="1.5" fill="#BF9B5E" opacity="0.85" />
      </svg>
    </div>
  );
}

function BranchMergeMotif() {
  return (
    <g fill="none" strokeLinecap="round">
      {/* faint document lines, suggesting text/paragraphs */}
      <g stroke="#FBF8F2" strokeOpacity="0.12" strokeWidth="3">
        <line x1="255" y1="28" x2="358" y2="28" />
        <line x1="255" y1="40" x2="336" y2="40" />
        <line x1="255" y1="52" x2="348" y2="52" />
      </g>
      {/* trunk */}
      <path
        d="M40,125 C90,125 90,70 170,70 C250,70 250,105 360,105"
        stroke="#BF9B5E"
        strokeWidth="2.5"
        strokeOpacity="0.9"
      />
      {/* branch diverging and merging back */}
      <path
        d="M90,97 C130,140 190,140 230,100"
        stroke="#BF9B5E"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      {/* commit nodes */}
      <g fill="#BF9B5E">
        <circle cx="40" cy="125" r="4" />
        <circle cx="90" cy="97" r="4" />
        <circle cx="160" cy="140" r="3" opacity="0.6" />
        <circle cx="170" cy="70" r="4" />
        <circle cx="230" cy="100" r="4" opacity="0.7" />
        <circle cx="360" cy="105" r="4" />
      </g>
    </g>
  );
}

function LinesMotif() {
  return (
    <g stroke="#BF9B5E" strokeLinecap="round">
      <line x1="30" y1="120" x2="220" y2="40" strokeWidth="2" strokeOpacity="0.7" />
      <line x1="60" y1="140" x2="280" y2="55" strokeWidth="2" strokeOpacity="0.45" />
      <line x1="100" y1="150" x2="340" y2="75" strokeWidth="2" strokeOpacity="0.25" />
      <circle cx="220" cy="40" r="4" fill="#BF9B5E" stroke="none" />
    </g>
  );
}
