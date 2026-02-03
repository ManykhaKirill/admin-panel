import type { User } from "@/entities/user";
import { useSearchStore } from "@/features/search";

export const useSearchUser = (users: User[]) => {
    const { query } = useSearchStore();

    const filteredUsers = users?.filter(
            (u: User) =>
                u.name.toLowerCase().includes(query.toLowerCase()) ||
                u.email.toLowerCase().includes(query.toLowerCase())
        );
    

    return filteredUsers;
}