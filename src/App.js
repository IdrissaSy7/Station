import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Classement from "./pages/Classement";
import Calendrier from "./pages/Calendrier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/classement" element={<Classement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
