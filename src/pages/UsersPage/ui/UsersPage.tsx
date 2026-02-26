import { 
    type User, 
    useUsersQuery, 
    UserCardSkeleton, 
    UserCard 
} from '@/entities/user';
import { Section } from '@/shared/ui/Section';
import { useSearchUser } from '@/features/user/search-user';

export const UsersPage = () => {
    const { data: users, isLoading } = useUsersQuery();
    const filtered = useSearchUser(users ?? []);

    return (
        <Section name='Users'>
            {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                    <UserCardSkeleton key={i} />
                ))
            ) : (
                filtered?.map((user: User) => (
                    <UserCard key={user.id} user={user}/>
                ))
            )}
        </Section>
    )
};