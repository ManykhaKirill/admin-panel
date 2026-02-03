import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/shared/api';

const USERS_KEY = ['users'];

export const useUsersQuery = () => {
  return useQuery({
    queryKey: USERS_KEY,
    queryFn: async () => {
      try {
        const response = await fetch(`${API_URL}/users/`);
        const users = await response.json();
        return users;
      } 
      catch(e) {
        console.log(`Failed to fetch users: ${e}`);
      }
    }
  })
}

export const useUserByIdQuery = (userId: number) => {
  return useQuery({
    queryKey: [USERS_KEY, userId],
    queryFn: async () => {
      try {
        const response = await fetch(`${API_URL}/users/${userId}`);
        const user = await response.json();
        return user;
      } 
      catch(e) {
        console.log(`Failed to fetch users: ${e}`);
      }
    },
    enabled: !!userId
  })
}

export const usePostsByUser = (userId: number) => {
   return useQuery({
    queryKey: [USERS_KEY],
    queryFn: async () => {
      try {
        const response = await fetch(`${API_URL}/users/${userId}/posts`);
        const user = await response.json();
        return user;
      } 
      catch(e) {
        console.log(`Failed to fetch users: ${e}`);
      }
    },
  })
}

