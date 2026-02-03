import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';

export const useDeleteUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (userId: number) => {
      try {
        const response = await fetch(`${API_URL}/users/${userId}`, {
          method: 'DELETE'
        });
        if(!response.ok) {
          throw new Error(`Failed to delete user: ${userId}`)
        }
        return userId;
      }
      catch(e) {
        throw new Error(`Failed to delete user ${userId}: ${e}`);
      }
    },
    onSuccess: (userId) => {
      client.setQueryData(['users'], (old: any[] | undefined) =>
        old ? old.filter((user) => user.id !== userId) : []);
    }
  })
};