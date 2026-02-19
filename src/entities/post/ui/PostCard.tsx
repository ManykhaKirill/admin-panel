import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type { PostCardProps } from '../model/post';
import { Card } from '@/shared/ui/Card';
import { UserInfo } from '@/entities/user';

export const PostCard: FC<PostCardProps> = ({
    post,
    user
}) => {
    const navigate = useNavigate();

    const toDetails = (section: string, id: number) => {
        navigate(`/${section}/${id}`);
    }

    return (
        <Card 
            key={post.id}
            hoverable
            selected 
            onClick={() => toDetails('posts', post.id)}
        >
            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
            <p className="text-[var(--text-secondary)] mb-2">{post.body}</p>
            {user && <UserInfo user={user} variant="compact" />}
        </Card>
    )
}