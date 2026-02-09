import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { Comment } from "@/entities/comment";

export const useUpdateComment = (commentId: number) => {
    const client = useQueryClient();
        return useMutation({
            mutationFn: async (data: Comment) => {
                try {
                    const response = await fetch(`${API_URL}/comments/${commentId}`, {
                        method: 'PUT',
                        body: JSON.stringify(data),
                        headers: {'Content-type': 'application/json'}
                    });
                    const updatedComment = await response.json();
                    return updatedComment;
                }
                catch(e) {
                    throw new Error(`Failed to update comment: ${e}`)
                }
            },
            onSuccess: (updatedComment) => {
                client.setQueryData(['comments'], (old: any[] | undefined) =>
                    old ? old.map((comment) => comment.id == updatedComment.id ? updatedComment : comment) : []);
            }
        })
}