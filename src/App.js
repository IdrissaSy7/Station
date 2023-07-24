import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Classement from "./pages/Classement";
import Calendrier from "./pages/Calendrier";
import Team from "./pages/Team";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/:id" element={<Team />} />
        <Route path="/undefined" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
