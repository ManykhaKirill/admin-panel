import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../model/post';
import { Card } from '@/shared/ui/Card';
import { PHOTO_API_URL } from '@/shared/api';

export const PostCard: FC<{ post: Post }> = ({
    post
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
            <span className="text-[var(--text-muted)] text-sm">by {post.userId}</span>
        </Card>
    )
}