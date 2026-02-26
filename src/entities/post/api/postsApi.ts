import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { Post } from '@/entities/post';

const POSTS_KEY = ['posts'];

export const usePostsQuery = () => {
  return useQuery<Post[]>({
    queryKey: POSTS_KEY, 
    queryFn: async () => {
        try {
            const response = await fetch(`${API_URL}/posts/`);
            const posts = await response.json();
            return posts;
        }
        catch(e) {
            throw new Error(`Failed to fetch posts: ${e}`);
        }
    }});
};

export const usePostByIdQuery = (postId: string) => {
    return useQuery<Post>({
        queryKey: [POSTS_KEY, postId],
        queryFn: async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${postId}`);
                const post = await response.json();
                return post;
            }
            catch(e) {
                throw new Error(`Failed to fetch post: ${e}`)
            }
        },
        enabled: !!postId
    })
}