import { useState, useMemo } from 'react';
import type { Post } from '@/entities/post';
import { isEmpty } from '../lib';

export const usePostFilter = ({ posts }: { posts: Post[] }
) => {
  const [search, setSearch] = useState('');
  const [userId, setUserId] = useState<number | ''>('');

  const filtered = useMemo(() => {
    if(isEmpty(posts)) return [];

    return posts?.filter((post) => {
      const matchesSearch =
        post?.title.toLowerCase().includes(search.toLowerCase()) ||
        post?.body.toLowerCase().includes(search.toLowerCase());

      const matchesUser = userId ? post?.userId === userId : true;

      return matchesSearch && matchesUser;
    });
  }, [posts, search, userId]);

  return {
    search,
    setSearch,
    userId,
    setUserId,
    filtered,
  };
}
