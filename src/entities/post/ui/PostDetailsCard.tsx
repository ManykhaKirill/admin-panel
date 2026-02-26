import type { FC, ReactNode } from 'react';
import type { Post } from '@/entities/post/model/post';
import { Card } from '@/shared/ui/Card';

export const PostDetailsCard: FC<{ 
    post: Post;
    children: ReactNode;
}> = ({
    post,
    children
}) => {
    return (
        <Card className="p-6 space-y-3">
        <h1 className="
                text-2xl 
                font-semibold 
                leading-snug
                text-[var(--text-primary)]
                ">
                {post.title}
            </h1>
            <p className="text-[var(--text-secondary)] leading-relaxed">{post.body}</p>
            <div className="pt-2 text-xs text-[var(--text-muted)]">
                {children}
            </div>
        </Card>
    )
}