import type { FC } from 'react';
import toast from 'react-hot-toast';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { useDeletePost } from '../model/useDeletePost';

export const DeletePostModal: FC<{
  isOpen: boolean;
  post: { id: number; title: string };
  onClose: () => void;
}> = ({ isOpen, post, onClose }) => {
  const { mutateAsync } = useDeletePost();

  const handleDelete = async () => {
    try {
      await mutateAsync(post.id);
      toast.success('Post deleted successfully!');
      onClose();
    } catch (e) {
      toast.error('Failed to delete post');
      console.error(e);
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Delete Post"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
        </>
      }
    >
      <p className="text-sm text-[var(--text-secondary)]">
        Delete post <span className="font-medium text-[var(--text-primary)]">
          "{post?.title}"
        </span>
        ?
      </p>
    </Modal>
  );
};
