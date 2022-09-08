import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/header/Header";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Curriculo = React.lazy(() => import("./pages/Curriculo"));
const Contato = React.lazy(() => import("./pages/Contato"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));

function App() {
  return (
    <React.Fragment>
      <Header />

      <Suspense fallback={<p className="centered">Carregando página</p>}>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/curriculo" element={<Curriculo />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
