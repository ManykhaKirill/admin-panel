import type { Comment, SearchComment } from '@/entities/comment';
import { useSearchStore } from '@/features/search';

export const useSearchComment = (comments: Comment[]) => {
  const { query } = useSearchStore();

  const filteredComments = comments?.filter((c) =>
    ["name", "email", "body"].some((key) =>
      c[key as keyof SearchComment].toLowerCase().includes(query.toLowerCase())
    )
  );

  return filteredComments;
}
