import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Classement from "./pages/Classement";
import Classementeuro from "./pages/Classementeuro";
import Calendrier from "./pages/Calendrier";
import Calendriereuro from "./pages/Calendriereuro";
import Calendriercoupe from "./pages/Calendriercoupe";
import Team from "./pages/Team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/calendrierldc" element={<Calendriereuro />} />
        <Route path="/calendriercoupe" element={<Calendriercoupe />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/classementldc" element={<Classementeuro />} />
        <Route path="/:id" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
