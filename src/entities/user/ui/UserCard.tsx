import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../model/user';
import { PHOTO_URL } from '@/shared/api';
import { Card } from '@/shared/ui/Card';

export const UserCard: FC<{
  user: User
}> = ({
    user
}) => {
  const navigate = useNavigate();

    const toDetails = (section: string, id: number) => {
        navigate(`/${section}/${id}`);
    }

    return (
      <Card
      hoverable
      selected
      onClick={() => toDetails('users', user.id)}
    >
      <div className="flex items-center gap-4 text-[var(--color-text-main)]">
        <img
          src={PHOTO_URL + user.id}
          alt={user.name}
          className="
            w-12 h-12 rounded-full
            ring-1 ring-[var(--color-border)]
          "
        />

        <div className="flex flex-col">
          <span className="font-semibold leading-tight">
            {user.name}
          </span>

          <span className="text-sm text-[var(--color-text-secondary)]">
            {user.email}
          </span>
        </div>

        <span className="
          ml-auto font-medium
          text-[var(--color-primary)]
        ">
          @{user.username}
        </span>
      </div>
    </Card>
    )
}