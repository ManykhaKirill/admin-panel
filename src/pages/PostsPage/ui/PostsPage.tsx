import { type FC, useMemo } from 'react';
import { Section } from '@/shared/ui/Section';
import { 
  type Post, 
  PostCard, 
  usePostsQuery, 
  PostCardSkeleton 
} from '@/entities/post';
import { type User, useUsersQuery } from '@/entities/user';
import { useSearchPost } from '@/features/post/search-post';

export const PostsPage: FC = () => {
  const { data: posts, isLoading: isPostsLoading } = usePostsQuery();
  const { data: users } = useUsersQuery();
  const filtered = useSearchPost(posts);

  const usersMap = useMemo(() => {
    if(!users) return {};

    const map: Record<number, User> = {};

    for (const user of users) {
      map[user.id] = user;
    }
    return map;
  },[users]);

  return (
    <Section name='Posts'>
        {isPostsLoading ? (
          Array.from({ length: 12 }).map((_, i) => (
            <PostCardSkeleton key={i} />
        ))
      ) : (
        filtered?.map((post: Post) => (
          <PostCard key={post.id} post={post} user={usersMap[post.userId]}/>
        ))
      )}
    </Section>
    )
};