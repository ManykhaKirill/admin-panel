import { useParams } from 'react-router-dom';
import { UserDetails } from '@/widgets/user-details';
import { useUserByIdQuery, UserDetailsSkeleton } from '@/entities/user';

export const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: user, isLoading } = useUserByIdQuery(Number(id));

    return (
        <div className="space-y-8">
            {isLoading ? (
                <UserDetailsSkeleton /> 
            ) : (
                <UserDetails user={user} />
            )}
        </div>
        
    )
}