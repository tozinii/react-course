import "./Card.css";

const Card = (props) => {
    const classes = 'card ' + props.className;
    
    //props.children allows that can be a wrapper component to be parent of another elements in other components
  return <div className={classes}>{props.children}</div>;
}

export default Card;
