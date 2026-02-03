import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { UserEdit } from "@/entities/user";

export const useUpdateUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async ({id, name, email, phone}: UserEdit) => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone
          }),
          headers: {'Content-type': 'application/json'}
        });
        const updatedUser = response.json();
        return updatedUser;
      }
      catch(e) {
        throw new Error(`Failed to update user: ${e}`)
      }
    },
    onSuccess: (updatedUser) => {
      client.setQueryData(['users'], (old: any[] | undefined) =>
        old ? old.map((user) => user.id === updatedUser.id ? updatedUser : user) : []);
    }
  })
};