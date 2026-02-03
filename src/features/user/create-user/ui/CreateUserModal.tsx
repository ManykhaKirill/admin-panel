import { type FC, useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { Modal } from '@/shared/ui/Modal';
import { useCreateUser } from '../model/useCreateUser';

export const CreateUserModal: FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({
    isOpen,
    onClose
}) => {
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const { mutateAsync, isPending } = useCreateUser();

    const handleSave = async () => {
        if (!form.name || !form.phone || !form.email) {
            toast.error("All fields are required");
            return;
        }
        await mutateAsync(form);
  };

    return (
        <Modal
            open={isOpen}
            title="Create User"
            onClose={onClose}
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
            <div className="space-y-4 mt-4">
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                        type="phone"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                </div>
        </Modal>
    )
}