import type { FC } from 'react';
import { PHOTO_URL } from '@/shared/api';
import type { UserInfoProps } from '../model/user';

export const UserInfo: FC<UserInfoProps> = ({
  user,
  variant = 'default',
  className = '',
}) => {
  const isCompact = variant === 'compact';

  return (
    <div
      className={`
        flex items-center gap-4
        ${className}
      `}
    >
      <img
        src={PHOTO_URL + user.id}
        alt={user.name}
        className={`
          rounded-full
          border border-[var(--border-subtle)]
          bg-[var(--bg-surface-muted)]
          ${isCompact ? 'w-10 h-10' : 'w-24 h-24'}
        `}
      />

      <div className="flex flex-col">
        <span className="font-semibold text-[var(--text-primary)]">
          {user.name}
        </span>

        <span className="text-sm text-[var(--text-muted)]">
          @{user.username}
        </span>

        {!isCompact && (
          <>
            <span className="text-sm text-[var(--text-secondary)]">
              {user.email}
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              {user.phone}
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              {user.website}
            </span>
          </>
        )}
      </div>
    </div>
  );
};