import ReactDOM from "react-dom";
import { Fragment } from "react";


const Backdrop=props=>{
    return(
        <div></div>
    )
}

const ModalOverlay=props=>{
    return (
        <div>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement=document.getElementById('overlays');

const Modal=props=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop></Backdrop>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;