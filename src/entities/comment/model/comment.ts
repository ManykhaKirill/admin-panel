export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type EditComment = Pick<Comment, 'id' | 'body'>;

export type SearchComment = Pick<Comment, 'name' | 'email' | 'body'>;