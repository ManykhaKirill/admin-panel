import type { FC } from 'react';
import { PHOTO_URL } from '@/shared/api';
import { type User, usePostsByUser } from '@/entities/user';
import { type Post, PostCard, PostCardSkeleton } from "@/entities/post"
import { useSearchPost } from '@/features/post/search-post';

export const UserDetails: FC<{
    user: User
}> = ({
    user
}) => {
    const { data: posts, isLoading } = usePostsByUser(user.id);
    const filtered = useSearchPost(posts);

    return (
        <>
            <div className="bg-card rounded-2xl shadow-md p-6 flex items-center gap-6">
                <img
                    src={PHOTO_URL + user.id}
                    alt={user.name}
                    className="w-28 h-28 rounded-full shadow-lg border-4 border-border"
                />
                <div>
                    <h2 className="text-2xl font-bold text-text-main">{user.name}</h2>
                    <p className="text-text-secondary">@{user.username}</p>
                    <p className="text-text-secondary">{user.email}</p>
                    <p className="text-text-secondary">{user.phone}</p>
                    <p className="text-text-secondary">{user.website}</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-text-main mb-4">
                    Posts by {user.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                {isLoading ? 
                    Array.from({ length: 4 }).map((_, i) => <PostCardSkeleton key={i} />) : 
                    filtered?.map((post: Post) => (
                        <PostCard key={post.id} post={post} />
                ))}
                </div>
            </div>
        </>
    )
}