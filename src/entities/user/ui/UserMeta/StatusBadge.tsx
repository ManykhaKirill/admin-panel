import type { FC } from 'react';
import type { UserStatus } from '@/entities/user/model/user';

const statusMap: Record<UserStatus, string> = {
  Active: `
    bg-[var(--color-success-bg)]
    text-[var(--color-success-text)]
  `,
  Blocked: `
    bg-[var(--color-error-bg)]
    text-[var(--color-error-text)]
  `,
};

export const StatusBadge: FC<{ status: UserStatus }> = ({ status }) => {
  return (
    <span
      className={`
        inline-flex items-center
        px-2 py-0.5
        text-xs font-medium
        rounded-full
        ${statusMap[status]}
      `}
    >
      {status}
    </span>
  );
};
