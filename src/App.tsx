import { useState } from "react";
import { Event, Header, Profile, Sidebar, Stats, Team } from "./Components";
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
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
