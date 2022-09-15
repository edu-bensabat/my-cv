import Nav from "./Nav";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../../store/mode";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);
  const hide = useSelector((state) => state.mode.hide);

  const widthSize = () => {
    window.innerWidth >= 768 && dispatch(modeActions.offHidden());
    window.innerWidth <= 768 && dispatch(modeActions.toHidden());
  };
  window.onresize = widthSize;

  const tail = useSelector((state) => state.mode.grid);

  const modeHandler = () => {
    if (mode === "darkMode") return dispatch(modeActions.toLight());

    if (mode === "lightMode") return dispatch(modeActions.toDark());
  };

  const hideHandler = () => {
    if (hide === "") return dispatch(modeActions.toHidden());

    if (hide === "hidden") return dispatch(modeActions.offHidden());
  };

  return (
    <React.Fragment>
      <div className={`header  ${mode} ${tail} justify-end md:justify-start`}>
        <header className="col-span-4  md:grid">
          <h1 className={`h1Header md:text-xl`}>MyCurriculum.js</h1>

          <div className="cursor-pointer px-4 md:hidden" id="burguer">
            <svg
              onClick={hideHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </header>

        <div className={`navRelative ${hide} md:static`}>
          <div className="navAbsolute md:top-4 md:bg-inherit md:border-none right-0">
            <Nav></Nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
