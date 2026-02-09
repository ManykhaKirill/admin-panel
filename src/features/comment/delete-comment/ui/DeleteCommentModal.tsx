import type { FC } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { useDeleteComment } from '../model/useDeleteComment';

export const DeleteCommentModal: FC<{
    isOpen: boolean;
    comment: { id: number; name: string };
    onClose: () => void;
}> = ({
    isOpen,
    comment,
    onClose
}) => {
    const { mutateAsync } = useDeleteComment();

    const handleDelete = async () => {
        try {
            await mutateAsync(comment.id);
            toast.success('Comment deleted successfully!');
            onClose();
        }
        catch(e) {
            toast.error('Failed to delete comment');
            console.error(e);
        }
    }

    return (
        <Modal
            open={isOpen}
            title='Удаление поста'
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
                Delete comment:
            <span className="font-medium text-[var(--text-primary)]">
                "{comment?.name}"
            </span>
                ?
            </p>
        </Modal>
    )
}