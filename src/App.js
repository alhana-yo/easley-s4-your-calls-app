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

          <form action="/signup" method="post" className="registration__form" >

            <fieldset className="whoCalls">

              <div className="main__whoCalls">
                <h2 className="main__whocalls--title">¿Quién atendió la llamada</h2>
                <select className="main__employees">
                  <option value="Carlos">Carlos</option>
                  <option value="Pepa">Pepa</option>
                </select>
              </div>

              <div className="main__requested--employee">
                <h2 className="main__requested--employee-title">¿Por quién preguntaban?</h2>
                <select className="main__employees">
                  <option value="Carlos">Carlos</option>
                  <option value="Pepa">Pepa</option>
                </select>
              </div>

            </fieldset>

            <fieldset className="incoming-data">
              <h2 className="incoming-data__title">¿Quién llamó?</h2>
              <div className="incoming-data__name">
                <label htmlFor="name" className="incoming-data__name--label">Nombre</label>
                <input id="name" type="text" className="incoming-data__name--input" placeholder="Nombre" />
              </div>
            
              <div className="incoming-data__company">
                <label htmlFor="company" className="incoming-data__company--label">Empresa</label>
                <input id="company" type="text" className="incoming-data__company--input" placeholder="Empresa" />
              </div>

              <div className="incoming-data__position">
                <label htmlFor="position" className="incoming-data__position--label">Cargo</label>
                <input id="position" type="text" className="incoming-data__position--input" placeholder="Cargo" />
              </div>

              <div className="incoming-data__info">
                <label htmlFor="info" className="incoming-data__info--label">Otro detalle</label>
                <input id="info" type="text" className="incoming-data__info--input" placeholder="Otro detalle" />
              </div>

              <div className="incoming-data__email">
                <label htmlFor="email" className="incoming-data__email--label">Email</label>
                <input id="email" type="email" className="incoming-data__email--input" placeholder="Email" />
              </div>

              <div className="incoming-data__mobile">
                <label htmlFor="mobile" className="incoming-data__mobile--label">Teléfono</label>
                <input id="mobile" type="tel" className="incoming-data__mobile--input" placeholder="Teléfono" />
              </div>
            
            </fieldset>

            <fieldset className="message">
              <h2 className="message__title">¿Qué mensaje dejó?</h2>

              <div className="call__container">
                <label htmlFor="redial" className="message__selection">Devolver llamada</label>
                <input id="redial" type="radio" className="message__selection--redial" placeholder="Devolver llamada" name="call"/>
              </div>
              <div className="call__container">
                <label htmlFor="call-back" className="message__selection">Llamará de nuevo</label>

                <input id="call-back" type="radio" className="message__selection--call-back" placeholder="Llamará de nuevo" name="call"/>
              </div>

              <label htmlFor="custom-message" className="custom-message__label">Mensaje personalizado</label>
              <textarea name="custom-message" id="custom-message" className="custom-message__input" cols="30" rows="10"></textarea>
            
            </fieldset>

            <input type="submit" value="Registrar" />



          </form>
        </main>
      </div>
    );
  }
}

export default App;
