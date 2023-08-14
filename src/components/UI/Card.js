import './Card.css';

Card=(props)=>{
    let classes = 'card ' + props.className;
    return <div className={classes}>{props.childrens}</div>
}


export default Card;