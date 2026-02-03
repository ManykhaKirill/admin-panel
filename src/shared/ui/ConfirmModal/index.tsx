import type { FC } from 'react';
import { Modal } from '../Modal';

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  title = 'Подтверждение',
  message = 'Вы уверены?',
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      title={title}
      onClose={onCancel}
      footer={
        <>
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Confirm
          </button>
        </>
      }
    >
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{message}</p>
    </Modal>
  );
};
