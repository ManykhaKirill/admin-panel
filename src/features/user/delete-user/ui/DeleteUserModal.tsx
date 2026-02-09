import type { FC } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { useDeleteUser } from '../model/useDeleteUser';

export const DeleteUserModal: FC<{
    isOpen: boolean;
    user: { id: number; name: string };
    onClose: () => void;
}> = ({
    isOpen,
    user,
    onClose
}) => {
    const { mutateAsync } = useDeleteUser();

    const handleDelete = async () => {
        try {
            await mutateAsync(user.id);
            toast.success('User deleted successfully!');
            onClose();
        }
        catch(e) {
            toast.error('Failed to delete user');
            console.error(e);
        }
    }

    return (
        <Modal
            open={isOpen}
            title='Delete user'
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
            Delete user <span className="font-medium text-[var(--text-primary)]">
          "{user?.name}"
        </span>
        ?
      </p>
        </Modal>
    )
}