import { useState, useMemo } from 'react';
import type { User } from '@/entities/user';
//import { isEmpty } from '../lib';

export const useUserFilter = ({ users }: { users: User[] }
) => {
  const [search, setSearch] = useState('');
  //const [userId, setUserId] = useState<number | ''>('');

  const filtered = useMemo(() => {
    if(!users) return [];

    return users?.filter((user) => {
      const matchesSearch =
        user?.name.toLowerCase().includes(search.toLowerCase()) ||
        user?.username.toLowerCase().includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [users, search]);

  return {
    search,
    setSearch,
    filtered,
  };
}
