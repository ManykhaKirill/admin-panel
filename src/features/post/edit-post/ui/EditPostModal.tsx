import { type FC, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import type { EditPost } from '@/entities/post';
import { useUpdatePost } from '../model/useUpdatePost';

export const EditPostModal: FC<{
  isOpen: boolean;
  post: EditPost;
  onClose: () => void;
}> = ({
  isOpen,
  post,
  onClose,
}) => {
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  const { mutateAsync, isPending } = useUpdatePost();

  useEffect(() => {
    if (isOpen) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [isOpen, post]);

  if (!isOpen) return null;

  const handleSave = async () => {
    try {
      await mutateAsync({ postId: post.id, data: { title, body }});
      toast.success('Post updated successfully!');
      onClose();
    }
    catch(e) {
      toast.error('Failed to update post');
      console.error();
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Edit Post"
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
      widthClass="max-w-xl"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
            placeholder="Enter post title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Body
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full min-h-[240px] p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
            placeholder="Enter post content..."
          />
        </div>
      </div>
    </Modal>
  );
};