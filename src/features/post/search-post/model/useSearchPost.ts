import type { Post } from '@/entities/post';
import { useSearchStore } from "@/features/search";

export const useSearchPost = (posts: Post[]) => {
    const { query } = useSearchStore();

    const filteredPosts = posts?.filter((post: Post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
  );

    return filteredPosts;
}