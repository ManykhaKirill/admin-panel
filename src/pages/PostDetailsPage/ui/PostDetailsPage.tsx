import { useParams } from "react-router-dom";
import { SectionDetails } from '@/shared/ui/SectionDetails';
import { usePostByIdQuery, PostCardSkeleton } from '@/entities/post';
import { PostDetails } from '@/widgets/post-details';
import { ErrorPage } from '@/widgets/ErrorPage';


export const PostDetailsPage = () => {
  const { postId } = useParams();
  const { data: post, isLoading, isSuccess } = usePostByIdQuery(postId!);
  

  return (
    <SectionDetails isLoading={isLoading} loader={<PostCardSkeleton />}>
      {isSuccess ? <PostDetails post={post} /> : <ErrorPage /> }
    </SectionDetails>
  );
};