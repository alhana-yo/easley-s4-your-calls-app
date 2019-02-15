import React, {Component} from "react";
import tick from '../images/tick.png';

class Modal extends Component {
  render() {
    return (
        <div className={`modal ${this.props.sucess}`}> <img src={tick}alt="tick" className="tick"></img>La llamada a {this.props.personRequested} se ha registrado correctamente y ya se ha notificado.</div> 
    );
  }
}

export default Modal;