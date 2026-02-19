import type { FC } from 'react';
import { type User, usePostsByUser } from '@/entities/user';
import { type Post, PostCard, PostCardSkeleton } from '@/entities/post';
import { useSearchPost } from '@/features/post/search-post';
import { Card } from '@/shared/ui/Card';
import { UserInfo } from '@/entities/user';

export const UserDetails: FC<{ user: User }> = ({ user }) => {
  const { data: posts, isLoading } = usePostsByUser(user.id);
  const filtered = useSearchPost(posts);

  return (
    <div className="space-y-8">
      <Card className="p-6 flex items-center gap-6">
        <UserInfo user={user} />
      </Card>
      <div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
          Posts by {user.name}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))
            : filtered?.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
        </div>
      </div>
    </div>
  );
};
