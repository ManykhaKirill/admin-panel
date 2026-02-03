import { type FC, useState } from 'react';
import { useUsersQuery } from '@/entities/user';
import { Table } from '@/features/table';
import { CreateUserModal } from '@/features/user/create-user';
import { EditUserModal } from '@/features/user/edit-user';
import { DeleteUserModal } from '@/features/user/delete-user';
import { useSearchUser } from '@/features/user/search-user';

export const UsersAdminPage: FC = () => {
  const { data: users, isLoading } = useUsersQuery();
  const filtered = useSearchUser(users);

  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenEdit = (user: any) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (user: any) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
        <Table
          data={filtered || []}
          columns={[
            { key: "id", label: "ID" },
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
          ]}
          isLoading={isLoading}
          onEdit={handleOpenEdit}
          onDelete={handleOpenDelete}
        />
      <CreateUserModal 
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
      <EditUserModal
        isOpen={isEditModalOpen}
        user={selectedUser}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        user={selectedUser}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};