import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {

    render(){
        return (
            <div className="button-register">
             <input type="submit" className="register" value="Registrar" onClick={this.props.sendForm}/>
            </div>

        );
    }

}

Button.propTypes = {
    sendForm: PropTypes.func.isRequired
}

export default Button;

