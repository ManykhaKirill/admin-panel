import { type FC, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Field } from '@/shared/ui/Field';
import type { Post } from '@/entities/post';
import { useUpdatePost } from '../model/useUpdatePost';

export const EditPostModal: FC<{
  isOpen: boolean;
  post: Post;
  onClose: () => void;
}> = ({ isOpen, post, onClose }) => {
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  const { mutateAsync, isPending } = useUpdatePost(post?.id);

  useEffect(() => {
    if (isOpen) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [isOpen, post]);

  const handleSave = async () => {
    try {
      await mutateAsync({
        ...post,
        title, 
        body
      });
      toast.success('Post updated successfully!');
      onClose();
    } catch {
      toast.error('Failed to update post');
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Edit Post"
      onClose={onClose}
      widthClass="max-w-xl"
      footer={
        <>
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={isPending}
          >
            {isPending ? 'Saving…' : 'Save'}
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <Field label='Title'>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter post title…'
          />
        </Field>
        <Field label='Content'>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content…"
            className="
              w-full min-h-[240px] px-3 py-2
              rounded-[var(--radius-sm)]
              bg-[var(--bg-surface)]
              text-[var(--text-primary)]
              border border-[var(--border-default)]
              shadow-[var(--shadow-sm)]
              transition
              resize-y
              focus:outline-none
              focus:ring-2 focus:ring-[var(--accent-primary)]
            "
          />
        </Field>
      </div>
    </Modal>
  );
};
