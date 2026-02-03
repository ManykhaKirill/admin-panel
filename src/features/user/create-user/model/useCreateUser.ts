import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';
import type { User } from '@/entities/user';


export const useCreateUser = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: Partial<User>) => {
            try {
                const response = await fetch(`${API_URL}/users`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'application/json'}
                });
                const newUser = await response.json();
                return newUser;
            }
            catch(e) {
                throw new Error(`Failed to create user: ${e}`)
            }
        },
        onSuccess: (newUser) => {
            client.setQueryData(['users'], (old: User[])=> [newUser, ...old]);
        }
    });
};