import { 
  FileText, 
  Users, 
  ChartColumnIncreasing,
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
    <div className="p-6 border-b border-[var(--border-subtle)]">
      <h1 className="text-lg font-semibold tracking-wide">mini Admin</h1>
    </div>
    <nav className="flex flex-col flex-1 p-4 gap-2">
      <SidebarLink to="/posts" icon={<FileText size={20} />}>Posts</SidebarLink>
      <SidebarLink to="/users" icon={<Users size={20} />}>Users</SidebarLink>
      <SidebarLink to="" icon={<ChartColumnIncreasing size={20} />}>Dashboards</SidebarLink>
      <Dropdown title="Manage">
        <SidebarLink to="/admin/posts" customStyle={'text-sm gap-2 px-3 py-2'} icon={<FileCog size={16} />}>Posts</SidebarLink>
        <SidebarLink to="/admin/users" customStyle={'text-sm gap-2 px-3 py-2'} icon={<UserCog size={16} />}>Users</SidebarLink>
        <SidebarLink to="/admin/comments" customStyle={'text-sm gap-2 px-3 py-2'} icon={<MessageSquareText size={16} />}>Comments</SidebarLink>
      </Dropdown>
    </nav>
    <div className="p-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">© 2025 mini Admin</div>
  </aside>
);