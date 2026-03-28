import React from 'react'
import { Outlet } from "react-router";
import "../src/Style/common.scss";
import BlackCards from './Components/BlackCards';
import WhiteCards from './Components/WhiteCards';
function App() {
  return (
    <div className='main-container'>
      <BlackCards />
      <WhiteCards />
      <Outlet />
    </div>
  )
}

export default App