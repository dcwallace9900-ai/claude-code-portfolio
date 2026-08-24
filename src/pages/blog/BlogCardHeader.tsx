interface BlogCardHeaderProps {
  motif: string;
  variant?: 'card' | 'hero';
  rounded?: boolean;
  className?: string;
}

const glowPosition: Record<string, { cx: string; cy: string }> = {
  'branch-merge': { cx: '82%', cy: '14%' },
  'ai-prompt': { cx: '16%', cy: '86%' },
};

const accentBar: Record<string, { x: number; width: number }> = {
  'branch-merge': { x: 40, width: 44 },
  'ai-prompt': { x: 316, width: 44 },
};

export default function BlogCardHeader({
  motif,
  variant = 'card',
  rounded = true,
  className = '',
}: BlogCardHeaderProps) {
  const height = variant === 'hero' ? 'h-40 md:h-56' : 'h-28 sm:h-32';
  const roundingClass = rounded ? (variant === 'hero' ? 'rounded-2xl' : 'rounded-lg') : '';
  const glow = glowPosition[motif] ?? glowPosition['branch-merge'];
  const bar = accentBar[motif] ?? accentBar['branch-merge'];

  return (
    <div
      className={`relative w-full ${height} ${roundingClass} overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <radialGradient id={`glow-${motif}`} cx={glow.cx} cy={glow.cy} r="65%">
            <stop offset="0%" stopColor="#BF9B5E" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#BF9B5E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="160" fill={`url(#glow-${motif})`} />
        {motif === 'branch-merge' ? (
          <BranchMergeMotif />
        ) : motif === 'ai-prompt' ? (
          <PromptMotif />
        ) : (
          <LinesMotif />
        )}
        <rect x={bar.x} y="150" width={bar.width} height="3" rx="1.5" fill="#BF9B5E" opacity="0.85" />
      </svg>
    </div>
  );
}

function BranchMergeMotif() {
  return (
    <g fill="none" strokeLinecap="round">
      {/* main line, running the full width */}
      <path d="M30,120 L370,120" stroke="#BF9B5E" strokeWidth="2.5" strokeOpacity="0.9" />

      {/* feature branch: lifts off the main line, holds its own commits, merges back in */}
      <path
        d="M110,120 C140,120 140,55 175,55 L245,55 C280,55 280,120 310,120"
        stroke="#BF9B5E"
        strokeWidth="2"
        strokeOpacity="0.55"
      />

      {/* commit nodes on the main line */}
      <g fill="#BF9B5E">
        <circle cx="30" cy="120" r="4.5" />
        <circle cx="110" cy="120" r="4.5" />
        <circle cx="310" cy="120" r="4.5" opacity="0.85" />
        <circle cx="370" cy="120" r="4.5" />
      </g>

      {/* commit nodes on the branch */}
      <g fill="#BF9B5E" opacity="0.75">
        <circle cx="175" cy="55" r="4" />
        <circle cx="245" cy="55" r="4" />
      </g>
    </g>
  );
}

function PromptMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* chat/prompt bubble */}
      <path
        d="M50,42 h146 a12,12 0 0 1 12,12 v54 a12,12 0 0 1 -12,12 h-88 l-24,22 v-22 h-34 a12,12 0 0 1 -12,-12 v-54 a12,12 0 0 1 12,-12 z"
        stroke="#BF9B5E"
        strokeWidth="2.5"
        strokeOpacity="0.85"
      />

      {/* typed prompt lines inside the bubble */}
      <g stroke="#BF9B5E" strokeWidth="3" strokeOpacity="0.5">
        <line x1="66" y1="70" x2="166" y2="70" />
        <line x1="66" y1="86" x2="142" y2="86" />
      </g>

      {/* blinking cursor caret */}
      <rect x="148" y="79" width="4" height="14" fill="#BF9B5E" opacity="0.9" stroke="none" />

      {/* sparkle, suggesting the AI response */}
      <path
        d="M318,34 L324,52 L342,58 L324,64 L318,82 L312,64 L294,58 L312,52 Z"
        fill="#BF9B5E"
        stroke="none"
        opacity="0.9"
      />
      <path
        d="M352,92 L355,101 L364,104 L355,107 L352,116 L349,107 L340,104 L349,101 Z"
        fill="#BF9B5E"
        stroke="none"
        opacity="0.5"
      />
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
