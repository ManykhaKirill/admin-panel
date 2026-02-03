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
        key={user.id}
        hoverable 
        selected 
        onClick={() => toDetails('users', user.id)}
      >
        <div className="flex items-center gap-4">
              <img
                src={PHOTO_URL + user.id}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
          <span className="font-semibold">{user.name}</span>
          <span className="text-[var(--text-secondary)] text-sm">{user.email}</span>
        </div>
        <span className="ml-auto text-[var(--accent-primary)] font-medium">{user.username}</span>
      </div>
    </Card>
    )
}