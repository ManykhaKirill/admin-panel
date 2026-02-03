import type { FC } from 'react';
import type { Post } from '../model/post';
import { Card } from '@/shared/ui/Card';

export const PostDetailsCard: FC<{ 
    post: Post;
}> = ({
    post,
}) => (
    <Card key={post.id} style='p-2'>
        <h1 className="text-2xl font-bold mb-2 text-text-main">{post.title}</h1>
        <p className="text-text-secondary leading-relaxed">{post.body}</p>
        <div className="mt-4 text-sm text-text-muted">
            Автор: User #{post.userId}
        </div>
    </Card>
)