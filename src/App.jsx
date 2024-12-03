import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RegisterBusiness from "./Pages/Register";

import CategoryDetails from "./Components/Category/Category";



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterBusiness/>} />
        <Route path="/category/:categoryName" element={<CategoryDetails />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
