import type { FC } from 'react';
import { type Post, PostDetailsCard } from '@/entities/post';
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
  const { data: comments, isLoading } = useCommentByIdQuery(post.id);
  const filtered = useSearchComment(comments);

  return (
    <div className="space-y-8">
      <PostDetailsCard post={post} />
      <div className='h-full'>
        <h2 className="text-xl font-semibold mb-4 text-text-main">
          Комментарии {isLoading ? '(...)' : `(${filtered?.length})`}
        </h2>
        {filtered?.length === 0 ? (
          <div className="flex justify-center items-center text-text-main">Комментариев пока нет</div>
        ) : (
          <div className="gap-4">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <CommentCardSkeleton key={i} />)
            ) : (
              filtered?.map((c) => (
                <CommentCard key={c.id} comment={c} />
            )))}
          </div>
        )}
      </div>
    </div>
  );
};