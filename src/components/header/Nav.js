import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const mode = useSelector((state) => state.mode.mode);
  const hide = useSelector((state) => state.mode.hide);

  return (
    <div className={`${hide} md:block`}>
      <ul className={`${classes.nav} ${mode} ulNav md:my-auto md:grid grid-cols-4 gap-4`}>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "border-b-2 border-blue-400" : ""
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "border-b-2 border-blue-400" : ""
            }
            to="/curriculo"
          >
            Curriculo
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "border-b-2 border-blue-400" : ""
            }
            to="/contato"
          >
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "border-b-2 border-blue-400" : ""
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
