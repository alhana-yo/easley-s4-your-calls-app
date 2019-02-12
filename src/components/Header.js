import React, { Component } from 'react';
import callsLogo from '../images/logo_your_calls.svg';
import PropTypes from 'prop-types';


class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <h1 className="logo">Interacso</h1>
                </div>
                <div className="header__appLogo">
                    <img src={callsLogo} className="your-calls" alt="Your Calls"/>
                </div>
            </header>
        );
    }


}
Header.propTypes = {
    callsLogo: PropTypes.string
}
export default Header;