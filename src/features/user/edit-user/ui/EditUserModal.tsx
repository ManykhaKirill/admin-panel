import { type FC, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Field } from "@/shared/ui/Field";
import { Button } from '@/shared/ui/Button';
import type { UserEdit } from "@/entities/user";
import { useUpdateUser } from "../model/useUpdateUser";

export const EditUserModal: FC<{
  isOpen: boolean;
  user: UserEdit;
  onClose: () => void;
}> = ({ isOpen, user, onClose }) => {
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);

  const { mutateAsync, isPending } = useUpdateUser();

  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      await mutateAsync({
        id: user.id,
        name,
        email,
        phone,
      });

      toast.success("User updated successfully!");
      onClose();
    } catch (e) {
      toast.error("Failed to update user");
      console.error(e);
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Edit User"
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
        <Field label="Name">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name..."
          />
        </Field>

        <Field label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </Field>

        <Field label="Phone">
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone..."
          />
        </Field>
      </div>
    </Modal>
  );
};
