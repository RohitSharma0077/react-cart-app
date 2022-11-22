import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';   // for portals

// portal concept is using for modals backdrops
const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props =>{

    return(
        <Fragment>

            {/* in case we don't use portals */}
           {/* <Backdrop></Backdrop> 
           <ModalOverlay>{props.children}</ModalOverlay> */}

             {/* in case we use portals */}

             { ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement) }

             { ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </Fragment>
    );
     
};
export default Modal;