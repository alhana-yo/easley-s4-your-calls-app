import React, { Component } from 'react';


class Button extends Component {

    render(){
        return (
            <input type="submit" className="register" value="Registrar" onClick={this.props.sendForm} />

        );
    }

}

export default Button;

