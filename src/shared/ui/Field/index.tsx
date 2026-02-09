import type { FC, ReactNode } from 'react';

interface FieldProps {
  label: string | ReactNode;
  children: ReactNode;
  className?: string;
}

export const Field: FC<FieldProps> = ({ label, children, className = "" }) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label className="text-sm font-medium text-[var(--text-secondary)]">
      {label}
    </label>
    {children}
  </div>
);