import React, { Component } from 'react';
import './styles/App.scss';
import plus from './images/plus.svg';
import logo from './images/logo-interacso-white.svg';
import callsLogo from './images/logo_your_calls.svg';
let error = "";

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      info: {
        addedBy: "",
        personRequested:"",
        name: "",
        company:"",
        position:"",
        otherInfo:"",
        email:"",
        phone: 0,
        message:"",
        customMessage:""
      },
      showError: false
    }
    
   
    this.getWhoCalls = this.getWhoCalls.bind(this);
    this.getRequestedEmployee = this.getRequestedEmployee.bind(this);
    this.getName = this.getName.bind(this);
    this.getCompany = this.getCompany.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getOtherInfo = this.getOtherInfo.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getCustomMessage = this.getCustomMessage.bind(this);
    this.isEmptyOrNot = this.isEmptyOrNot.bind(this);
    this.sendForm = this.sendForm.bind(this);

  }

  getWhoCalls(event) {
    const { info } = this.state;
    const newInfo = { ...info, addedBy: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getRequestedEmployee(event) {
    const { info } = this.state;
    const newInfo = { ...info, personRequested: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getName(event) {
    const { info } = this.state;
    const newInfo = { ...info, name: event.currentTarget.value };
    this.setState({ info: newInfo });
  }
  
  getCompany(event) {
    const { info } = this.state;
    const newInfo = { ...info, company: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPosition(event) {
    const { info } = this.state;
    const newInfo = { ...info, position: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getOtherInfo(event) {
    const { info } = this.state;
    const newInfo = { ...info, otherInfo: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getEmail(event) {
    const { info } = this.state;
    const newInfo = { ...info, email: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPhone(event) {
    const { info } = this.state;
    const newInfo = { ...info, phone: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getMessage(event) {
    const { info } = this.state;
    const newInfo = { ...info, message: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getCustomMessage(event) {
    const { info } = this.state;
    const newInfo = { ...info, customMessage: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  sendForm(event){
    event.preventDefault();
    this.isEmptyOrNot();
  }

  isEmptyOrNot(){
    const incomingInfo = this.state.info;
    if (incomingInfo.name === "" && incomingInfo.company === "" && incomingInfo.position === "" && incomingInfo.phone === 0 && incomingInfo.email === "" && incomingInfo.otherInfo === ""){
     
      if(this.state.showError === false){
      this.setState({
        showError: true
      })
      error = (this.state.showError) ? 'error' : 'hola'; console.log(error);
    }
    } else if (incomingInfo.message === "" && incomingInfo.customMessage === ""){
      console.log("HAY QUE RELLENAR EL MENSAJE");
    } else {
      console.log("enviar info al servidor");
      
    }
  }
  
  
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
                  <img src={plus} className="newCall__icon--img" alt="plus" />
              </div>
              <p className="newCall__title">Nueva Llamada</p></div>
            <div className="menu__historic"><p className="historic__title">Histórico</p></div>
          </nav>

          <form action="/signup" method="post" className="registration__form" >
          

            <fieldset className="form-section whoCalls">
            <div className="formUp">
              <div className="main__whoCalls">
                <h2 className="main__whocalls--title">¿Quién atendió la llamada</h2>
                <select className="main__employees" onChange={this.getWhoCalls}>
                  <option value="Elige un empleado">Elige un empleado</option>
                  <option value="Carlos">Carlos</option>
                  <option value="Pepa">Pepa</option>
                </select>
              </div>

              <div className="main__requested--employee">
                <h2 className="main__requested--employee-title">¿Por quién preguntaban?</h2>
                <select className="main__employees" onChange={this.getRequestedEmployee}>
                  <option value="Elige un empleado">Elige un empleado</option>
                  <option value="Carlos">Carlos</option>
                  <option value="Pepa">Pepa</option>
                </select>
              </div>

            </div>
            </fieldset>

            <fieldset className="form-section incoming-data">
              <h2 className="incoming-data__title">¿Quién llamó?</h2>
              <p className={`${error}`}>Debes rellenar al menos uno de los campos</p>
              <div className="incoming-data__name">
                <label htmlFor="name" className="incoming-data__name--label">Nombre</label>
                <input id="name" type="text" className="incoming-data__name--input" placeholder="Nombre" onKeyUp={this.getName}/>
              </div>
            
              <div className="incoming-data__company">
                <label htmlFor="company" className="incoming-data__company--label">Empresa</label>
                <input id="company" type="text" className="incoming-data__company--input" placeholder="Empresa" onKeyUp={this.getCompany}/>
              </div>

              <div className="incoming-data__position">
                <label htmlFor="position" className="incoming-data__position--label">Cargo</label>
                <input id="position" type="text" className="incoming-data__position--input" placeholder="Cargo" onKeyUp={this.getPosition}/>
              </div>

              <div className="incoming-data__other-info">
                <label htmlFor="other-info" className="incoming-data__other-info--label">Otro detalle</label>
                <input id="other-info" type="text" className="incoming-data__other-info--input" placeholder="Otro detalle" onKeyUp={this.getOtherInfo}/>
              </div>

              <div className="incoming-data__email">
                <label htmlFor="email" className="incoming-data__email--label">Email</label>
                <input id="email" type="email" className="incoming-data__email--input" placeholder="Email" onKeyUp={this.getEmail}/>
              </div>

              <div className="incoming-data__mobile">
                <label htmlFor="mobile" className="incoming-data__mobile--label">Teléfono</label>
                <input id="mobile" type="tel" className="incoming-data__mobile--input" placeholder="Teléfono" onKeyUp={this.getPhone}/>
              </div>
            
            </fieldset>

            <fieldset className="form-section message">
              <h2 className="message__title">¿Qué mensaje dejó?</h2>

              <div className="call__container">
                <label htmlFor="redial" className="message__selection">Devolver llamada</label>
                <input id="redial" type="radio" value="Devolver llamada" className="message__selection--redial" placeholder="Devolver llamada" name="call" onChange={this.getMessage}/>
              </div>
              <div className="call__container">
                <label htmlFor="call-back" className="message__selection">Llamará de nuevo</label>

                <input id="call-back" type="radio"  value="Llamará de nuevo" className="message__selection--call-back" placeholder="Llamará de nuevo" name="call" onChange={this.getMessage}/>
              </div>

              <label htmlFor="custom-message" className="custom-message__label">Mensaje personalizado</label>
              <textarea name="custom-message" id="custom-message" className="custom-message__input" cols="30" rows="10" onKeyUp={this.getCustomMessage}></textarea>
            
            </fieldset>

            <input type="submit" value="Registrar" onClick={this.sendForm}/>

          </form>
        </main>
      </div>
    );
  }
}

export default App;
