import classes from './Button.module.css'

const But = props => {
    return <button onClick={props.changeModeHandler} className={`${classes.but} ${props.mode}`}>Dark Mode</button>
}

export default But;