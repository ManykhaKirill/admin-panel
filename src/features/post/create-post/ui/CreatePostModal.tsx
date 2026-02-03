import { type FC, useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { useCreatePost } from '../model/useCreatePost';
import type { Post } from '@/entities/post';

export const CreatePostModal: FC<{
    isOpen: boolean;
    onClose: () => void;
    defaultUserId?: number;
    onCreated?: (post: Post) => void;
}> = ({
  isOpen,
  onClose,
  defaultUserId = 1,
  onCreated,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { mutateAsync, isPending } = useCreatePost();

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setBody("");
    }
  }, [isOpen]);

  const handleSave = async () => {
    if (!title.trim() || !body.trim()) { 
        toast.error('Please fill in all fields');
        return;
    }
    try {
        const created = await mutateAsync({
            userId: defaultUserId,
            title: title.trim(),
            body: body.trim(),
        });
        toast.success('Post created successfully!');
        onCreated?.(created);
        onClose();
    } catch (e) {
      toast.error('Failed to create post');
      console.error(e);
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Create Post"
      onClose={onClose}
      widthClass="max-w-xl"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isPending}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Create"}
          </button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="text-sm font-medium">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Post title"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Body</span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Post content"
          />
        </label>
      </div>
    </Modal>
  );
};
