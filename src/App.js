import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Curriculo from "./components/pages/Curriculo";
import Contato from "./components/pages/Contato";
import SobreSite from "./components/pages/SobreSite";
import Portfolio from "./components/pages/Portfolio";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

function App() {
  const componentSettings = useSelector((state) => state.componentConfig);

  console.log(componentSettings);

  return (
    <React.Fragment>
      <Header />

      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/curriculo">
            <Curriculo />
          </Route>

          <Route path="/sobre-site">
            <SobreSite />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
