import { FC } from "react";
import { links } from "../../constants";
import LinkItem from "../LinkItem";

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
      <ul>
        {links.map((link, index) => (
          <LinkItem
            key={index}
            href={link.href}
            icon={link.icon}
            text={link.text}
            badge={link.badge}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
