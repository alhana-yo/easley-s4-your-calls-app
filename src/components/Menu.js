import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';




class Menu extends Component {

    render() {
        return (
            <nav className="menu">
                <div className="menu__container">
                    <div className="menu__newCall">
                        <NavLink exact to="/" className="new-call__link" activeClassName="is-active"><p className="newCall__title">Nueva Llamada</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/callHistory" className="call-back__link" activeClassName="is-active"><p className="historic__title">Histórico</p></NavLink>
                    </div>
                </div>
            </nav>
        );
    }

}
Menu.propTypes = {
    plus: PropTypes.string
}
export default Menu;


