import type { FC } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
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
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                  >
                    Confirm
                  </button>
                </>
              }
            >
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{`Удалить пост "${comment?.name}"?`}</p>
        </Modal>
    )
}