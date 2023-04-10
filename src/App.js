import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Classement from "./pages/Classement";
import Classementeuro from "./pages/Classementeuro";
import Calendrier from "./pages/Calendrier";
import Calendriereuro from "./pages/Calendriereuro";
import Calendriercoupe from "./pages/Calendriercoupe";
import Team from "./pages/Team";
import Error from "./pages/Error";

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
        <Route path="/undefined" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
