import { type FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import type { EditComment } from "@/entities/comment";
import { useUpdateComment } from '../model/useUpdateComment';

export const EditCommentModal: FC<{
    isOpen: boolean;
    comment: EditComment;
    onClose: () => void;
}> = ({
  isOpen,
  comment, 
  onClose,
}) => {
  const [body, setBody] = useState(comment?.body);
  const { mutateAsync, isPending } = useUpdateComment();

  useEffect(() => {
    if(isOpen){
      setBody(comment?.body);
    }
  }, [isOpen, comment])

  const handleSave = async () => {
    if (!comment) return;
    try {
      await mutateAsync({ id: comment.id, body });
      toast.success('Comment updated successfully!');
      onClose();
    } catch (e) {
      toast.error('Failed to update comment');
      console.error(e);
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Edit Comment"
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
              onClick={handleSave}
              disabled={isPending}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </>
        }
      >
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full min-h-[240px] p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
        placeholder="Edit comment body..."
      />
     </Modal>
  );
};
