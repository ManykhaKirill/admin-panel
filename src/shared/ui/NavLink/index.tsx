import { type ReactNode, type FC } from "react";
import { NavLink } from "react-router-dom";

type SideBarLink = {
  to: string;
  icon: ReactNode;
  custonStyle?: string;
  children: ReactNode;
}

export const SidebarLink: FC<SideBarLink> = ({ 
  to,
  icon,
  custonStyle,
  children 
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center ${custonStyle || 'text-lg gap-2 px-3 py-2'} rounded-md transition-colors
    ${isActive ? "bg-sidebar-active-bg text-sidebar-active-text" : "hover:bg-sidebar-hover hover:text-sidebar-active-text"}`
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);