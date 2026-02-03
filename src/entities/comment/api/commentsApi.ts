import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { Comment } from '../model/comment';

const COMMENTS_KEY = ['comments'];

export const useCommentsQuery = () => {
    return useQuery({
        queryKey: COMMENTS_KEY,
        queryFn: async () => {
            try {
                const response = await fetch(`${API_URL}/comments`);
                const comments = await response.json();
                return comments;
            }
            catch(e) {
                throw new Error(`Failed to fetch comments: ${e}`)
            }
        }
    })
};

export const useCommentByIdQuery = (postId: number) => {
    return useQuery({
        queryKey: COMMENTS_KEY,
        queryFn: async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${postId}/comments`);
                const postsComments = await response.json();
                return postsComments;
            }
            catch(e) {
                throw new Error(`Failed to fetch comments by id ${e}`)
            }
        }
    })
}

export async function createComment(data: Omit<Comment, 'id'>) {
    try {
        const response = await fetch(`${API_URL}/comments`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        });
        const newComment = await response.json();
        return newComment;
    }
    catch(e) {
        throw new Error(`Failed to create comment: ${e}`);
    }
};