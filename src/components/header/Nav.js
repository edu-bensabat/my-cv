import { componentConfigActions } from "../../store/ComponentConfig";
import classes from "./Nav.module.css";
import { useDispatch} from "react-redux/es/exports";

const Nav = (props) => {
  const dispatch = useDispatch();

  const closePages = () => {
    dispatch(componentConfigActions.closeComponents());
  };

  const openHome = () => {
    closePages();
    dispatch(componentConfigActions.openHome());
  };
  const openCurriculo = () => {
    closePages();
    dispatch(componentConfigActions.openCurriculo());
  };
  const openContato = () => {
    closePages();
    dispatch(componentConfigActions.openContato());
  };
  const openSobreSite = () => {
    closePages();
    dispatch(componentConfigActions.openSobreSite());
  };

  return (
    <ul className={`${classes.nav} ${props.mode}`}>
      <li onClick={openHome}>Home</li>
      <li onClick={openCurriculo}>Curriculo</li>
      <li onClick={openContato}>Contato</li>
      <li onClick={openSobreSite}>Sobre o site</li>
    </ul>
  );
};

export default Nav;
