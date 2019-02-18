import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

render() {
  const { preventSubmission, getWhoCalls, errorPerson, getRequestedEmployee, errorIncomingData, getName, getCompany, getPosition, getOtherInfo, getEmail, getPhone, getCallAction, getMessage, errorMessage, deselectOption, selectPersonRequested, redialCheck, callBackCheck, callAgainClass, callBackClass} = this.props;
  return(
    <form method="post" onSubmit={preventSubmission} className="registration__form" >
      <fieldset className="form-section addedBy">
        <div className="formUp">
          <div className="main__addedBy">
            <h2 className="main__addedBy--title">¿Quién atendió la llamada?</h2>
            <select className="main__employees" onChange={getWhoCalls}>
              <option value="Elige un empleado">Elige un empleado</option>
              <option value="Carlos">Carlos</option>
              <option value="Pepa">Pepa</option>
            </select>
          </div>
          <div className="main__personRequested">
            <h2 className="main__personRequested-title">¿Por quién preguntaban?</h2>
            <select className="main__employees" onChange={getRequestedEmployee} onClick={deselectOption} ref={selectPersonRequested}required>
              <option className="option" value="Elige un empleado" >Elige un empleado</option>
              <option value="Carlos" >Carlos</option>
              <option value="Pepa">Pepa</option>
            </select>
            <p className={`error-msg ${errorPerson}`}>Debes seleccionar un empleado</p>
          </div>
        </div>
      </fieldset>
      <div className="incoming-data__container">
        <fieldset className="form-section incoming-data">
          <h2 className="incoming-data__title">¿Quién llamó?</h2>
          <p className={`error-msg-who ${errorIncomingData}`}>Debes rellenar al menos uno de los campos</p>
          <div className="incoming-data__fieldsContainer">
            <div className="incoming-data__name">
              <label htmlFor="name" className="incoming-data__name--label label" aria-label="nombre">Nombre</label>
              <input id="name" type="text" className="incoming-data__name--input incoming-data__input" placeholder="Nombre" onKeyUp={getName} />
            </div>
            <div className="incoming-data__company">
              <label htmlFor="company" className="incoming-data__company--label label" aria-label="empresa">Empresa</label>
              <input id="company" type="text" className="incoming-data__company--input incoming-data__input" placeholder="Empresa" onKeyUp={getCompany} />
            </div>
            <div className="incoming-data__position">
              <label htmlFor="position" className="incoming-data__position--label label" aria-label="cargo">Cargo</label>
              <input id="position" type="text" className="incoming-data__position--input incoming-data__input" placeholder="Cargo" onKeyUp={getPosition} />
            </div>
            <div className="incoming-data__other-info">
              <label htmlFor="other-info" className="incoming-data__other-info--label label" aria-label="otro detalle">Otro detalle</label>
              <input id="other-info" type="text" className="incoming-data__other-info--input incoming-data__input" placeholder="Otro detalle" onKeyUp={getOtherInfo} />
            </div>
            <div className="incoming-data__email">
              <label htmlFor="email" className="incoming-data__email--label label" aria-label="email">Email</label>
              <input id="email" type="email" className="incoming-data__email--input incoming-data__input" placeholder="Email" onKeyUp={getEmail} />
            </div>
            <div className="incoming-data__mobile">
              <label htmlFor="mobile" className="incoming-data__mobile--label label" aria-label="teléfono">Teléfono</label>
              <input id="mobile" type="tel" className="incoming-data__mobile--input incoming-data__input" placeholder="Teléfono" onKeyUp={getPhone} />
            </div>
          </div>
        </fieldset>
        <fieldset className="form-section message">
          <h2 className="message__title">¿Qué mensaje dejó?</h2>
          <div className="call-container__wrapper">
            <div className="call-container__radios">
              <div className="call__container">
                <label htmlFor="redial" className={`callAction_selection label fake-redial-button ${callAgainClass}`}>Llamará de nuevo<input id="redial" type="checkbox" checked={redialCheck} value="Llamará de nuevo" className="callAction__selection--redial" placeholder="Llamará de nuevo" name="call" onChange={getCallAction} ref={this.redialButton}></input></label>
              </div>
                <div className="call__container">
                  <label htmlFor="call-back" className={`callAction_selection label fake-CallBack-button ${callBackClass}`}>Devolver la llamada<input id="call-back" type="checkbox" checked={callBackCheck}value="Devolver la llamada" className="callAction__selection--call-back" placeholder="Devolver la llamada" name="call" onChange={getCallAction} ref={this.callBack}></input></label>
                </div>
            </div>
            <div className="message_container">
              <label htmlFor="message" className="message__label label">Mensaje personalizado</label>
              <textarea name="message" id="message" className="message__input" placeholder="Mensaje personalizado" onKeyUp={getMessage}></textarea>
              <p className={`error-msg-textarea ${errorMessage}`}>Debes rellenar el campo del mensaje.</p>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
    );
  }
}

Form.propTypes = {
  preventSubmission: PropTypes.func.isRequired,
  getWhoCalls: PropTypes.func.isRequired,
  errorPerson: PropTypes.string.isRequired,
  getRequestedEmployee: PropTypes.func.isRequired,
  errorIncomingData: PropTypes.string.isRequired,
  getName: PropTypes.func.isRequired,
  getCompany: PropTypes.func.isRequired,
  getPosition: PropTypes.func.isRequired,
  getOtherInfo: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired,
  getPhone: PropTypes.func.isRequired,
  getCallAction: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  deselectOption: PropTypes.func.isRequired,
  redialCheck: PropTypes.bool.isRequired,
  callBackCheck: PropTypes.bool.isRequired,
  callAgainClass: PropTypes.string.isRequired,
  callBackClass:PropTypes.string.isRequired
}

export default Form;





