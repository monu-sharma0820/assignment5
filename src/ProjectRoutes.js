import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
// import CategoryCard from './Components/CategoryCard';

function ProjectRoutes() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/movie/category/:category" element={<CategoryCard  />} /> */}
     </Routes>
      </BrowserRouter>
  )
}

export default ProjectRoutes;