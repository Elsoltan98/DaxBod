import { FC } from "react";

interface SidebarProps {
  isSidebarOpen?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 pt-20 z-40 w-64 h-screen bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      Sidebar
    </aside>
  );
};

export default Sidebar;
