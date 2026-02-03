export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type EditPost = Pick<Post, 'id' | 'title' | 'body'>;