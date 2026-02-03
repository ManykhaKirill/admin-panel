import type { FC, ReactNode } from "react";

export const PageContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-white shadow rounded-2xl p-6 min-h-[400px] animate-fadeIn">
    {children}
  </div>
);
