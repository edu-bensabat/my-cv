import Nav from "./Nav";
import classes from "./Header.module.css";
import But from "./Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../../store/mode";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  const modeHandler = () => {
    if (mode === "darkMode") return dispatch(modeActions.toLight());

    if (mode === "lightMode") return dispatch(modeActions.toDark());
  };

  return (
    <React.Fragment>
      <div className={`header ${mode}`}>
        <header>
          <h1 className={classes.title}>MyCurriculum.js</h1>

          <Nav></Nav>

          <But changeModeHandler={modeHandler}></But>
        </header>

        <hr></hr>
      </div>
    </React.Fragment>
  );
};

export default Header;
