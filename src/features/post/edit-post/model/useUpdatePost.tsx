import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { Post } from "@/entities/post";

export const useUpdatePost = (postId: number) => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: Post) => {
            try {
                const response = await fetch(`${API_URL}/posts/${postId}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'Application/json'}
                });
                const updatedPost = await response.json();
                return updatedPost;
            }
            catch(e) {
                throw new Error(`Failed to update post: ${e}`)
            }
        },
        onSuccess: (updatedPost) => {
            client.setQueryData(['posts'], (old: any[] | undefined) =>
                old ? old.map((post) => post.id === updatedPost.id ? updatedPost : post) : []);
        }
    });
}