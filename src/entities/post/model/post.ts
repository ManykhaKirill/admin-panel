import type { User } from '@/entities/user';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type PostCardProps = {
    post: Post,
    user?: User,
}

export type EditPost = Pick<Post, 'id' | 'title' | 'body'>;