import React, { Component } from 'react';
import plus from '../images/plus.svg';
import PropTypes from 'prop-types';




class Menu extends Component {

    render() {
        return (
            <nav className="menu">
                <div className="menu__container">
                    <div className="newCall__circle">
                        <img src={plus} className="newCall__icon--img" alt="plus" />
                    </div>
                    
                    <div className="menu__newCall">
                        <p className="newCall__title">Nueva Llamada</p>
                    </div>

                    <div className="menu__historic">
                        <p className="historic__title">Histórico</p>
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


