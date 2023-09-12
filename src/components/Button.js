const Button=props=>{
    return(
            <button type={props.type} onClick={props.onDelete}>{props.label}</button>
    )
}

export default Button;