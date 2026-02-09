import type { FC } from 'react';
import { PHOTO_URL } from '@/shared/api';
import { type User, usePostsByUser } from '@/entities/user';
import { type Post, PostCard, PostCardSkeleton } from '@/entities/post';
import { useSearchPost } from '@/features/post/search-post';
import { Card } from '@/shared/ui/Card';

export const UserDetails: FC<{ user: User }> = ({ user }) => {
  const { data: posts, isLoading } = usePostsByUser(user.id);
  const filtered = useSearchPost(posts);

  return (
    <div className="space-y-8">
      {/* User card */}
      <Card className="p-6 flex items-center gap-6">
        <img
          src={PHOTO_URL + user.id}
          alt={user.name}
          className="
            w-24 h-24 rounded-full
            border border-[var(--border-subtle)]
            bg-[var(--bg-surface-muted)]
          "
        />

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            {user.name}
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            @{user.username}
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            {user.email}
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            {user.phone}
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            {user.website}
          </p>
        </div>
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
