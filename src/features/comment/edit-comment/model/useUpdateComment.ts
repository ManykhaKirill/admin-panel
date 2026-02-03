import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { EditComment } from "@/entities/comment";

export const useUpdateComment = () => {
    const client = useQueryClient();
        return useMutation({
            mutationFn: async (comment: EditComment) => {
                try {
                    const response = await fetch(`${API_URL}/comments/${comment.id}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            body: comment.body
                        }),
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