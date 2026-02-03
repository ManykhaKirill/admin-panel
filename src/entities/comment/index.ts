export type { Comment, EditComment, SearchComment } from './model/comment';
export {
    useCommentsQuery,
    useCommentByIdQuery,
    createComment,
 } from './api/commentsApi';
export { CommentCard } from './ui/CommentCard';
export { CommentCardSkeleton } from './ui/CommentCardSkeleton';