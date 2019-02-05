import React, { Component } from 'react';


class Button extends Component {

    render(){
        return (
            <input type="submit" value="Registrar" onClick={this.props.sendForm} />

        );
    }

}

export default Button;

