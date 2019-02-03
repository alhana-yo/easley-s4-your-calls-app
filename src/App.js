import React, { Component } from 'react';
import './styles/App.scss';
import plus from './images/plus.svg';
import logo from './images/logo-interacso-white.svg';
import callsLogo from './images/logo_your_calls.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__logo">
            <img src={logo} className="logo" alt="Interacso" /></div>
          <div className="header__appLogo">
            <img src={callsLogo} className="yourCalls" alt="Your Calls" /></div>
        </header>
        <main className="main">
          <nav className="menu">
            <div className="menu__newCall">
            <div className="newCall__circle">
              <span className="newCall__icon--container">
                <img src={plus} className="newCall__icon--img" alt="plus" />
              </span>
            </div>
            <p className="newCall__title">Nueva LLamada</p></div>
            <div className="menu__historic"><p className="historic__title">Histórico</p></div>
          </nav>
          <div className="main__whoCalls">
            <h2 className="main__whocalls--title">¿Quién atendió la llamada</h2>
            <select className="main__employees"></select>
          </div>

          <div className="main__requested--employee">
            <h2 className="main__requested--employee-title">¿Por quién preguntaban?</h2>
            <select className="main__employees"></select>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
