import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal!==this.props.showModal || nextProps.children!==this.props.children
    }

    componentWillUpdate(){
        console.log("Modal updated")
    }

    render(){
        return(
            <React.Fragment>
                <Backdrop show={this.props.showModal} backdropClick={this.props.backdropClick} />
                <div className={classes.Modal} style={{transform : this.props.showModal ? "translateY(0)" : "translateY(-110vh)"}}>
                    {this.props.children}
                </div>
        </React.Fragment>
        )
    }
}

export default Modal;