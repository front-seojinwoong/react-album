import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "@pages/index";
import AboutPage from "@pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}></Route>        
        <Route index path="/about" element={<AboutPage/>}></Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App