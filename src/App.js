import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Curriculo from "./components/pages/Curriculo";
import Contato from "./components/pages/Contato";
import SobreSite from "./components/pages/SobreSite";
import Portfolio from "./components/pages/Portfolio";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/sobre-site" element={<SobreSite />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
