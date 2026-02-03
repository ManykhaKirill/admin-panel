import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';

export const useDeletePost = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (postId: number) => {
            try {
                const response = await fetch(`${API_URL}/posts/${postId}`, {
                    method: 'DELETE'
                });
                if(!response.ok) {
                    throw new Error(`Failed to delete post ${postId}`);
                }
                return postId;
            }
            catch(e) {
                throw new Error(`Failed to delete post ${postId}: ${e}`);
            }
        },
        onSuccess: (postId) => {
            client.setQueryData(['posts'], (old: any[] | undefined) =>
                old ? old.filter((post) => post.id !== postId) : []);
        }
    });
}