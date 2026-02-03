import { type FC, useState } from 'react';
import { type Comment, useCommentsQuery } from '@/entities/comment';
import { Table } from '@/features/table';
import { EditCommentModal } from '@/features/comment/edit-comment'; 
import { DeleteCommentModal } from '@/features/comment/delete-comment';
import { useSearchComment } from '@/features/comment/search-comment';

export const CommentsAdminPage: FC = () => {
    const { data: comments, isLoading } = useCommentsQuery();
    const filtered = useSearchComment(comments);

    const [selectedComment, setSelectedComment] = useState<any | null>();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setDeletedOpen] = useState<any | null>(null);

    const handleEditClick = (comment: Comment) => {
      setSelectedComment(comment);
      setIsEditOpen(true);
    }

    const handleOpenDelete = ({id, name}: {id: number, name: string}) => {
      setSelectedComment({id, name});
      setDeletedOpen(true);
    };

    return (
      <>
        <Table
          data={filtered || []}
          columns={[
            { key: "postId", label: "Post ID" },
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "body", label: "Body" }
          ]}
          isLoading={isLoading}
          onEdit={handleEditClick}
          onDelete={handleOpenDelete}
        />
        <EditCommentModal
          isOpen={isEditOpen}
          comment={selectedComment}
          onClose={() => setIsEditOpen(false)}
        />
        <DeleteCommentModal
          isOpen={isDeleteOpen}
          comment={selectedComment}
          onClose={() => setDeletedOpen(false)}
        />
      </>
    )
}