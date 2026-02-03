import type { FC, ReactNode } from 'react';

type CardPropd = {
    style?: string;
    onClick?: () => void;
    hoverable?: boolean;
    selected?: boolean;
    children: ReactNode;
}

export const Card: FC<CardPropd> = ({ 
    style,
    onClick,
    hoverable = false,
    selected = false,
    children 
}) => {
    const baseClasses = `
        bg-[var(--bg-surface)]
        text-[var(--text-primary)]
        border border-[var(--border-subtle)]
        rounded-md
        shadow-[var(--shadow-sm)]
        p-4
        transition-[var(--transition-base)]
        ${hoverable ? "hover:shadow-[var(--shadow-md)] hover:bg-[var(--bg-surface-muted)]" : ""}
        ${selected ? "border-[var(--accent-primary)] bg-[var(--accent-primary-soft)]" : ""}
  `;

    return (
        <div className={`${baseClasses} ${style}`} onClick={onClick}>
                {children}
        </div>
    )
};

