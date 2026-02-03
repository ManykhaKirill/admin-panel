import { useParams } from "react-router-dom";
import { usePostByIdQuery, PostCardSkeleton } from '@/entities/post';
import { PostDetails } from '@/widgets/post-details';


export const PostDetailsPage = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = usePostByIdQuery(postId!);
  

  return (
    <div className="space-y-8">
      {isLoading ? (
          <PostCardSkeleton />
        ) : (
          <PostDetails post={post} />
      )}
    </div>
  );
};