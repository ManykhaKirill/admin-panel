import type {
  FC,
  ReactNode,
  ButtonHTMLAttributes
} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children?: ReactNode;
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-medium ' +
  'transition-colors duration-200 ' +
  'focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-[var(--radius-sm)]',
  md: 'h-10 px-4 text-sm rounded-[var(--radius-sm)]',
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--accent-primary)] text-white ' +
    'hover:bg-[var(--accent-primary-hover)]',
  secondary:
    'bg-[var(--bg-surface-muted)] text-[var(--text-primary)] ' +
    'border border-[var(--border-default)] ' +
    'hover:bg-[var(--bg-surface)]',
  danger:
    'bg-[var(--state-danger-bg)] text-[var(--state-danger-text)] ' +
    'hover:opacity-90',
  ghost:
    'bg-transparent text-[var(--text-secondary)] ' +
    'hover:bg-[var(--bg-surface-muted)]',
};

export const Button: FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        ${BASE}
        ${SIZES[size]}
        ${VARIANTS[variant]}
        ${className}
      `}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
