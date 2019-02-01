import React, { Component } from 'react';
import './styles/App.scss';
import logo from './images/logo-interacso-white.svg';
import callsLogo from './images/your_calls.svg';

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
        
        <h1>hola</h1>
      </div>
    );
  }
}

export default App;
