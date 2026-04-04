import React, { useState } from 'react'
import { Outlet } from "react-router";
import "../src/Style/common.scss";
import BlackCards from './Components/BlackCards';
import WhiteCards from './Components/WhiteCards';
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main-container`}>
      <BlackCards theme={theme} toggleTheme={toggleTheme} />
      <WhiteCards theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  )
} 

export default App