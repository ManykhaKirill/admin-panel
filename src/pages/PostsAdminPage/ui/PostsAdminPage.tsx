import { useState, useCallback } from 'react';
import { usePostsQuery } from '@/entities/post';
import { CreatePostModal } from '@/features/post/create-post';
import { EditPostModal } from '@/features/post/edit-post';
import { DeletePostModal } from '@/features/post/delete-post';
import { Table } from '@/features/table';
import { useSearchPost } from '@/features/post/search-post';

export const PostsAdminPage = () => {
  const { data: posts, isLoading } = usePostsQuery();
  const filtered = useSearchPost(posts);

  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = (post: { id: number; title: string; body: string }) => {
    setSelectedPost(post);
    setIsEditOpen(true);
  };

  const handleOpenDelete = (post: { id: number; title: string }) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  const handleCreateClick = useCallback(() => {
    setIsCreateOpen(true);
  },[setIsCreateOpen]);

    return (
    <>
        <Table
          data={filtered || []}
          columns={[
            { key: "id", label: "ID" },
            { key: "title", label: "Title" },
            { key: "body", label: "Body" },
          ]}
          isLoading={isLoading}
          onEdit={handleEditClick}
          onDelete={handleOpenDelete}
        />
        <CreatePostModal
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
        />
        <EditPostModal
          isOpen={isEditOpen}
          post={selectedPost}
          onClose={() => setIsEditOpen(false)}
        />
        <DeletePostModal
          isOpen={isDeleteModalOpen}
          post={selectedPost}
          onClose={() => setIsDeleteModalOpen(false)}
        />
        </>
  )
}