import type { FC } from 'react';
import type { UserView } from '@/entities/user/model/user';
import { RoleBadge } from './RoleBadge';
import { StatusBadge } from './StatusBadge';

export const UserMeta: FC<{ user: UserView }> = ({ user }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <RoleBadge role={user.role} />
      <StatusBadge status={user.status} />

      <span className="text-xs text-[var(--color-text-muted)]">
        Active {String(user?.lastActiveAt)} ago
      </span>
    </div>
  );
};
