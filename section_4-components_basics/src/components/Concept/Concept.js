import './Concept.css';

const Concept = (props) => {
return(
    <li className="concept">
        <img src={props.conceptInfo.image} alt={props.conceptInfo.title}/>
        <h2>{props.conceptInfo.title}</h2>
        <p>{props.conceptInfo.description}</p>
    </li>
);
}

export default Concept;