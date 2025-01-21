import { useState } from "react";
import { Header, Profile, Sidebar } from "./Components";
import Main from "./ui/Main";
import Content from "./ui/Content";

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
      <Main>
        <Content>Main Content</Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
