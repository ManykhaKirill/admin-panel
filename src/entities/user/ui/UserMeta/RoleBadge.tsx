import type { FC } from 'react';
import type { UserRole } from '@/entities/user/model/user';

const roleMap: Record<UserRole, string> = {
  Admin: `
    bg-[var(--color-primary-light)]
    text-[var(--color-primary)]
  `,
  Moderator: `
    bg-[var(--color-secondary-light)]
    text-[var(--color-secondary)]
  `,
  User: `
    bg-[var(--color-subtle)]
    text-[var(--color-text-secondary)]
  `,
};

export const RoleBadge: FC<{ role: UserRole }> = ({ role }) => {
  return (
    <span
      className={`
        inline-flex items-center
        px-2 py-0.5
        text-xs font-medium
        rounded-full
        ${roleMap[role]}
      `}
    >
      {role}
    </span>
  );
};
