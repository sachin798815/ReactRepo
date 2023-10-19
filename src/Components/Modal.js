import ReactDOM from "react-dom";
import { Fragment } from "react";

const ModalOverlay=props=>{
    return(
        <div>{props.children}</div>
    )
}

const protalElement=document.getElementById('overlays');

const Modal=props=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,protalElement)}
        </Fragment>
    )
}


export default Modal;