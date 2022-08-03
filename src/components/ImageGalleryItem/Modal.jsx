import styles from "../styles.module.css"
import React, { Component } from "react"
// import { createPortal } from 'react-dom';

class Modal extends Component {

    componentDidMount() {
    window.addEventListener('keydown', this.onESCClose);
    }

    componentWillUnmount() {
    window.removeEventListener('keydown', this.onESCClose);
    }

    onESCClose = e => {
        this.props.onCloseModal(e)
    }

    render() {
        const prop = this.props;
        return(
            <div className={styles.overlay} onClick={prop.onCloseModal} >
                <div className={styles.modal}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal

