import type { FC } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { useDeletePost } from '../model/useDeletePost';

export const DeletePostModal: FC<{
    isOpen: boolean;
    post: { id: number; title: string };
    onClose: () => void;
}> = ({
    isOpen,
    post,
    onClose
}) => {
    const { mutateAsync } = useDeletePost();

    const handleDelete = async () => {
        try {
            await mutateAsync(post.id);
            toast.success('Post deleted successfully!');
            onClose();
        }
        catch(e) {
            toast.error('Failed to delete post');
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
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{`Удалить пост "${post?.title}"?`}</p>
        </Modal>
    )
}