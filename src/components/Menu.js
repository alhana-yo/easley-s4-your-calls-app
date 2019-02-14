import React, { Component } from 'react';
import plus from '../images/plus.svg';
import pluswhite from '../images/plus_white.svg';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';




class Menu extends Component {

    render() {
        return (
            <nav className="menu">
                <div className="menu__container">

                    {/* <div className="newCall__circle">
                        <img src={plus} className="newCall__icon--img" alt="plus" />
                    </div> */}


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


