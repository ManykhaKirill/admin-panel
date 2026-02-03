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
  <aside className="w-48 bg-sidebar-bg text-sidebar-text shadow-lg flex flex-col">
    <div className="p-6 border-b border-border">
      <h1 className="text-2xl font-bold tracking-wide">mini Admin</h1>
    </div>
    <nav className="flex flex-col flex-1 p-4 gap-2">
      <SidebarLink to="/posts" icon={<FileText size={18} />}>Posts</SidebarLink>
      <SidebarLink to="/users" icon={<Users size={18} />}>Users</SidebarLink>
      <SidebarLink to="" icon={<ChartColumnIncreasing size={18} />}>Dashboards</SidebarLink>
      <Dropdown title="Manage">
        <SidebarLink to="/admin/posts" custonStyle={'text-base gap-2 px-3 py-2'} icon={<FileCog size={16} />}>Posts</SidebarLink>
        <SidebarLink to="/admin/users" custonStyle={'text-base gap-2 px-3 py-2'} icon={<UserCog size={16} />}>Users</SidebarLink>
        <SidebarLink to="/admin/comments" custonStyle={'text-base gap-2 px-3 py-2'} icon={<MessageSquareText size={16} />}>Comments</SidebarLink>
      </Dropdown>
    </nav>
    <div className="p-4 border-t border-border text-sm text-blue-200">© 2025 mini Admin</div>
  </aside>
);