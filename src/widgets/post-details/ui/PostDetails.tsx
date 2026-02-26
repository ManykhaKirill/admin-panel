import type { FC } from 'react';
import { type Post, PostDetailsCard } from '@/entities/post';
import { UserInfo } from '@/entities/user';
import { useUserByIdQuery } from '@/entities/user';
import {
  useCommentByIdQuery,
  CommentCardSkeleton,
  CommentCard
 } from '@/entities/comment';
 import { useSearchComment } from '@/features/comment/search-comment';

export const PostDetails: FC<{
  post: Post;
}> = ({
  post,
 }) => {
  const { data: user, isLoading: isUserLoading } = useUserByIdQuery(post.userId);
  const { data: comments, isLoading: isCommentsLoading } = useCommentByIdQuery(post.id);
  const filtered = useSearchComment(comments);

  return (
    <div className="space-y-8">
      <PostDetailsCard post={post}>
        {isUserLoading || !user ? (
          <div className="h-4 w-32 rounded bg-[var(--border-subtle)]" />
              ) : ( 
          <UserInfo user={user} variant="compact" />
        )}
      </PostDetailsCard>
      <section>
        <h2 className="
          text-xl
          font-semibold
          mb-4
          text-[var(--text-primary)]
          flex items-center gap-2
        ">
          Comments:
          <span className="text-xl text-[var(--text-muted)]">
            {isCommentsLoading ? '…' : filtered?.length}
          </span>
        </h2>
        <div className="flex flex-col gap-4">
        {isCommentsLoading && (
          Array.from({ length: 4 }).map((_, i) => (
            <CommentCardSkeleton key={i} />
          ))
        )}

        {!isCommentsLoading && filtered?.length === 0 && (
          <div className="flex justify-center items-center py-8 text-[var(--text-muted)]">
            There are no comments yet
          </div>
        )}

        {!isCommentsLoading && filtered?.map((c) => (
          <CommentCard key={c.id} comment={c} />
        ))}
      </div>
      </section>
    </div>
  );
};