import type { FC, ReactNode } from 'react';

type CardPropd = {
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
    selected?: boolean;
    children: ReactNode;
}

export const Card: FC<CardPropd> = ({ 
    className = '',
    onClick,
    hoverable = false,
    selected = false,
    children 
}) => {
    const isClickable = Boolean(onClick);

  const baseClasses = `
    bg-[var(--bg-surface)]
    text-[var(--text-primary)]
    border border-[var(--border-subtle)]
    rounded-md
    shadow-[var(--shadow-sm)]
    p-4
    transition-[var(--transition-base)]
  `;

  const hoverClasses =
    hoverable && !selected
      ? `
        hover:bg-[var(--bg-surface-muted)]
        hover:shadow-[var(--shadow-md)]
      `
      : '';

  const selectedClasses = selected
    ? `
      bg-[var(--accent-primary-soft)]
      border-[var(--accent-primary)]
    `
    : '';

  const clickableClasses = isClickable
    ? 'cursor-pointer'
    : '';

    return (
        <div  
            className={`
                ${baseClasses}
                ${hoverClasses}
                ${selectedClasses}
                ${clickableClasses}
                ${className}
            `} 
            onClick={onClick}
        >
                {children}
        </div>
    )
};

