import type { FC } from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';

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
  return (
    <Modal
      open={isOpen}
      title={title}
      onClose={onCancel}
      footer={
        <>
          <Button
            variant="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </>
      }
    >
      <p className="text-sm text-[var(--text-secondary)]">
        {message}
      </p>
    </Modal>
  );
};
