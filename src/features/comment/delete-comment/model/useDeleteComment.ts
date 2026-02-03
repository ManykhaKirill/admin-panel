import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';

export const useDeleteComment = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (commentId: number) => {
            try {
                const response = await fetch(`${API_URL}/comments/${commentId}`, {
                    method: 'DELETE'
                });
                if(!response.ok){
                    throw new Error(`Failed to delete comment ${commentId}`)
                }
                return commentId;
            }
            catch(e) {
                throw new Error(`Failed to deelete comment ${commentId}: ${e}`)
            }
        },
        onSuccess: (commentId) => {
            client.setQueryData(['comments'], (old: any[] | undefined) =>
                old ? old.filter((comment) => comment.id !== commentId) : []);
        }
    })
}