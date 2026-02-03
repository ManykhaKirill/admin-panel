import { 
  type Post, 
  PostCard, 
  usePostsQuery, 
  PostCardSkeleton 
} from '@/entities/post';
import { Section } from '@/shared/ui/Section';
import { useSearchPost } from '@/features/post/search-post';

export const PostsPage = () => {
  const { data: posts, isLoading } = usePostsQuery();
  const filtered = useSearchPost(posts);

  return (
    <Section name='Posts'>
        {isLoading ? (
          Array.from({ length: 12 }).map((_, i) => (
            <PostCardSkeleton key={i}/>
        ))
      ) : (
        filtered?.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </Section>
    )
};