import { type FC, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { type UserEdit } from '@/entities/user';
import { useUpdateUser } from '../model/useUpdateUser';

export const EditUserModal: FC<{
  isOpen: boolean;
  user: UserEdit;
  onClose: () => void;
}> = ({
  isOpen,
  user,
  onClose,
}) => {
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const { mutateAsync, isPending } = useUpdateUser();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    try {
      await mutateAsync({ id: user.id, name, email, phone });
      toast.success('User updated successfully!');
      onClose();
    } catch (e) {
      toast.error('Failed to update user');
      console.error(e);
    }
  };

  return (
    <Modal
      open={isOpen}
      title="Edit User"
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
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
            placeholder="Enter user name..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
            placeholder="Enter email..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
            placeholder="Enter phone..."
          />
        </div>
      </div>
    </Modal>
  );
};
