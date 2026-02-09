import { type ReactNode, type FC } from "react";
import { NavLink } from "react-router-dom";

type SideBarLink = {
  to: string;
  icon: ReactNode;
  customStyle?: string;
  children: ReactNode;
}

export const SidebarLink: FC<SideBarLink> = ({ 
  to,
  icon,
  customStyle,
  children 
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center
      ${customStyle || "text-base gap-2 px-3 py-2"}
      rounded-md
      transition-[var(--transition-base)]
      text-[var(--text-inverse)]

      ${
        isActive
          ? `
            bg-[var(--accent-primary-soft)]
            text-[var(--accent-primary)]
            font-medium
          `
          : `
            hover:bg-[var(--accent-primary-soft)]
          `
      }
    `}
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);