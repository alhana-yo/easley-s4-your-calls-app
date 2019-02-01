import React, { Component } from 'react';
import './styles/App.scss';
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
            <div className="menu__newCall"><span className="newCall__icon"></span><p className="newCall__title">Nueva LLamada</p></div>
            <div className="menu__historic"><p className="historic__title">Histórico</p></div>
          </nav>
        </main>
      </div>
    );
  }
}

export default App;
