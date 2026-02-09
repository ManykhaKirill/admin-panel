import { type FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { Button } from "@/shared/ui/Button";
import { Field } from "@/shared/ui/Field";
import { Input } from "@/shared/ui/Input";
import type { Comment } from "@/entities/comment";
import { useUpdateComment } from '../model/useUpdateComment';

export const EditCommentModal: FC<{
    isOpen: boolean;
    comment: Comment;
    onClose: () => void;
}> = ({
  isOpen,
  comment, 
  onClose,
}) => {
  const [name, setName] = useState(comment?.name)
  const [body, setBody] = useState(comment?.body);
  const { mutateAsync, isPending } = useUpdateComment(comment?.id);

  useEffect(() => {
    if(isOpen){
      setName(comment?.name);
      setBody(comment?.body);
    }
  }, [isOpen, comment])

  const handleSave = async () => {
    if (!comment) return;
    try {
      await mutateAsync({ 
          ...comment,
          name, 
          body 
      });
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
      <Field label='Title'>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter comment title…'
        />
      </Field>
      <Field label='Content'>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter comment content…"
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
     </Modal>
  );
};
