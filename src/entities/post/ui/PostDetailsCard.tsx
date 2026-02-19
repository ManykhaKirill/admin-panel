import type { FC } from 'react';
import type { Post } from '@/entities/post/model/post';
import { type User, UserInfo } from '@/entities/user';
import { Card } from '@/shared/ui/Card';

export const PostDetailsCard: FC<{ 
    post: Post;
    user: User;
    isLoading: boolean;
}> = ({
    post,
    user,
    isLoading
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
                {isLoading ? (
                    <div className="h-4 w-32 rounded bg-[var(--border-subtle)]" />
                    ) : ( 
                        <UserInfo user={user} variant="compact" />
                )}
            </div>
        </Card>
    )
}