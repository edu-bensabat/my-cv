import classes from "./Button.module.css";
import { useSelector } from "react-redux";

const But = (props) => {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <button
      onClick={props.changeModeHandler}
      className={`${classes.but} ${mode}`}
    >
      Dark Mode
    </button>
  );
};

export default But;
