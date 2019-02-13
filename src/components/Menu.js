import React, { Component } from 'react';
import plus from '../images/plus.svg';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';




class Menu extends Component {

    render() {
        return (
            <nav className="menu">
                <div className="menu__container">
                    <div className="newCall__circle">
                        <img src={plus} className="newCall__icon--img" alt="plus" />
                    </div>
                    
                    <div className="menu__newCall">
                    <Link to="/"><p className="newCall__title">Nueva Llamada</p></Link>
                    </div>

                    <div className="menu__historic">
                    <Link to="/callHistory"><p className="historic__title">Histórico</p></Link>
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


