import type { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`
      w-full
      rounded-md
      px-4 py-2
      bg-[var(--bg-surface)]
      text-[var(--text-primary)]
      placeholder:text-[var(--text-muted)]
      border border-[var(--border-subtle)]
      focus:outline-none
      focus:border-[var(--accent-primary)]
      focus:ring-2
      focus:ring-[var(--accent-primary-soft)]
      transition-[var(--transition-base)]
      disabled:bg-[var(--bg-surface-muted)]
      disabled:text-[var(--text-muted)]
      disabled:cursor-not-allowed
      ${className}
    `}
  />
);