import { useState } from "react";
import { Header, Sidebar } from "./Components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSideBar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default App;
