import { 
  FileText, 
  Users, 
  FileCog,
  UserCog,
  MessageSquareText
} from "lucide-react";
import { SidebarLink } from '@/shared/ui/NavLink';
import { Dropdown } from '@/shared/ui/Dropdown';

export const Sidebar = () => (
  <aside className="
      w-48
      bg-[var(--bg-layout)]
      text-[var(--text-inverse)]
      flex flex-col
      border-r border-[var(--border-subtle)]"
    >
    <div className="px-6 py-4 border-b border-[var(--border-subtle)]">
  <div className="flex items-center gap-3 group cursor-pointer">
    <div
  className="
    w-10 h-10
    rounded-md
    border
    border-[var(--accent-primary)]
    text-[var(--accent-primary)]
    flex items-center justify-center
    font-semibold
    transition-all duration-200
    group-hover:bg-[var(--accent-primary-soft)]
  "
>
  MA
</div>
    <div className="flex flex-col leading-tight">
        <span className="
          text-base font-semibold
          text-[var(--text-primary)]
        ">
          Mini Admin
        </span>
      <span className="
        text-xs
        text-[var(--text-muted)]
      ">
        Admin System
      </span>
    </div>

  </div>
</div>
    <nav className="flex flex-col flex-1 p-4 gap-2">
      <SidebarLink to="/posts" icon={<FileText size={20} />}>Posts</SidebarLink>
      <SidebarLink to="/users" icon={<Users size={20} />}>Users</SidebarLink>
      <Dropdown title="Manage">
        <SidebarLink to="/admin/posts" customStyle={'text-sm gap-2 px-3 py-2'} icon={<FileCog size={16} />}>Posts</SidebarLink>
        <SidebarLink to="/admin/users" customStyle={'text-sm gap-2 px-3 py-2'} icon={<UserCog size={16} />}>Users</SidebarLink>
        <SidebarLink to="/admin/comments" customStyle={'text-sm gap-2 px-3 py-2'} icon={<MessageSquareText size={16} />}>Comments</SidebarLink>
      </Dropdown>
    </nav>
    <div className="
      flex p-4 
      border-t border-[var(--border-subtle)] 
      text-xs 
      text-[var(--text-muted)]
    ">
      © 2025 Mini Admin
    </div>
  </aside>
);