import React from 'react';

interface GreenScoreBadgeProps {
  score: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E';
  size?: 'sm' | 'md' | 'lg';
  showGrade?: boolean;
}

export const GreenScoreBadge: React.FC<GreenScoreBadgeProps> = ({
  score,
  grade,
  size = 'md',
  showGrade = true
}) => {
  const getColorClasses = (s: number) => {
    if (s >= 90) return { stroke: '#10b981', bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' };
    if (s >= 80) return { stroke: '#059669', bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-700 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800' };
    if (s >= 70) return { stroke: '#0284c7', bg: 'bg-sky-50 dark:bg-sky-950/40', text: 'text-sky-700 dark:text-sky-400', border: 'border-sky-200 dark:border-sky-800' };
    if (s >= 60) return { stroke: '#eab308', bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' };
    return { stroke: '#ef4444', bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' };
  };

  const colors = getColorClasses(score);

  if (size === 'sm') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border ${colors.bg} ${colors.border} ${colors.text} text-xs font-bold`}>
        <span>{score}</span>
        {showGrade && <span className="text-[10px] opacity-75 font-semibold">({grade})</span>}
      </div>
    );
  }

  if (size === 'lg') {
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
          <svg className="w-20 h-20 -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              className="text-gray-100 dark:text-gray-800"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke={colors.stroke}
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-xl font-black text-gray-900 dark:text-white leading-none">
              {score}
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold mt-0.5">
              /100
            </span>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase font-extrabold tracking-wider text-gray-500 dark:text-gray-400">
            Green Score
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-xl font-black ${colors.text}`}>Grade {grade}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {score >= 90 ? 'Exceptional Circularity' : score >= 80 ? 'Superior Eco Standard' : 'Moderate Impact'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default 'md'
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border ${colors.bg} ${colors.border} shadow-2xs`}>
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg className="w-9 h-9 -rotate-90">
          <circle
            cx="18"
            cy="18"
            r={radius}
            stroke="currentColor"
            className="text-gray-200 dark:text-gray-800"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r={radius}
            stroke={colors.stroke}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span className="absolute text-xs font-black text-gray-900 dark:text-white">
          {score}
        </span>
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400 dark:text-gray-500 leading-none">
          Green Score
        </span>
        <span className={`text-xs font-bold ${colors.text} leading-tight mt-0.5`}>
          Grade {grade}
        </span>
      </div>
    </div>
  );
};
