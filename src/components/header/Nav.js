import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <ul className={`${classes.nav} ${props.mode}`}>
      <li>
        <NavLink activeClassName={classes.active} to="/home">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName={classes.active} to="/curriculo">
          Curriculo
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/contato">
          Contato
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/sobre-site">
          Sobre o site
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/portfolio">
          Portfolio
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
