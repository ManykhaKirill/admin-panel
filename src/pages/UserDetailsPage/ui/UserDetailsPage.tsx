import { useParams } from 'react-router-dom';
import { UserDetails } from '@/widgets/user-details';
import { useUserByIdQuery, UserDetailsSkeleton } from '@/entities/user';
import { SectionDetails } from '@/shared/ui/SectionDetails';
import { ErrorPage } from '@/widgets/ErrorPage';

export const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: user, isLoading, isSuccess } = useUserByIdQuery(Number(id));

    return (
        <SectionDetails isLoading={isLoading} loader={<UserDetailsSkeleton />}>
            {isSuccess ? <UserDetails user={user} /> : <ErrorPage />}
        </SectionDetails>
    )
}