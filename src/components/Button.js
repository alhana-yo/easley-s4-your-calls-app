import React, { Component } from 'react';


class Button extends Component {

    render(){
        return (
            <div className="button-register">
            <input type="submit" className="register" value="Registrar" onClick={this.props.sendForm} />
            </div>

        );
    }

}

export default Button;

