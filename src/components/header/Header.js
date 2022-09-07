import Nav from "./Nav";
import classes from "./Header.module.css";
import But from "./Button";
import React, { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(classes.lightMode);

  const modeHandler = () => {

    if (mode === classes.lightMode) return setMode(classes.darkMode);

    if (mode === classes.darkMode) return setMode(classes.lightMode);
  };

  return (
    <React.Fragment>

    <div  className={`${mode}`}>

    <header>

      <h1 className={classes.title}>MyCurriculum.js</h1>

      <Nav mode={mode}></Nav>

      <But mode={mode} changeModeHandler={modeHandler}></But>
    </header>

    <hr></hr>
    </div>
    </React.Fragment>
  );
};

export default Header;
