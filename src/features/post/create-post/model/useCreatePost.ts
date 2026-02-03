import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { Post } from "@/entities/post";

export const useCreatePost = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: Omit<Post, 'id'>) => {
            try {
                const response = await fetch(`${API_URL}/posts`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'Application/json'}
                });
            
                const newPost = await response.json();
                return newPost;
            }
            catch(e) {
                throw new Error(`Failed to create post: ${e}`)
            }
        },
        onSuccess: (newPost) => {
            client.setQueryData(['posts'], (old: Post[])=> [newPost, ...old])
        }
    });
}