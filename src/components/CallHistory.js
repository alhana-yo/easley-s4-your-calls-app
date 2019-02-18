import React, { Component } from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';


class CallHistory extends Component {
  printRow(item){
    return (
      <tr className="list__item" key={item._id} >
        <td>
          <p className="date__day">{item.loggedAt.split("T")[0].split("-").reverse().join("/")}</p>
          <p className="hour">{item.loggedAt.split("T")[1].split("", 5)}h</p>
        </td>
        <td>
          <p className="askfor">{item.personRequested}</p>
        </td>
        <td>
          <p className="name">{item.name}</p>
        </td>
        <td>
          <p className="company">{item.company}</p>
        </td>
        <td>
          <p className="position">{item.position}</p>
        </td>
        <td>
          <p className="otherinfo">{item.otherInfo}{item.email}{item.telephone}</p>
        </td>
        <td>
          <p className="message">{item.message}</p>
          <p className="action">{item.action}</p>
        </td>
      </tr>
    );
  }

  printTable(values) {
    return values.map(item => this.printRow(item))
  }

  componentDidMount(){
      this.props.actionShowList();
  }

  render() {
    const {results, actionFilterDate} = this.props;
    const now = moment().format('YYYY-MM-DD');

    const today = results.filter(item => {
      const loggedTime = moment(item.loggedAt, 'YYYY-MM-DD');
      return loggedTime.isSame(now);
    });

    const others = results.filter(item => {
      const loggedTime = moment(item.loggedAt, 'YYYY-MM-DD');
      return !loggedTime.isSame(now);
    });

      return(
        <div className="wrapper__callHistory">
          <table className="table">
            <tr>
              <th className="table__title title__date cell" >Fecha/hora</th>
              <th className="table__title title__questions cell">Preguntaron por</th>
              <th className="table__title cell" colSpan="4">Llamó</th>
              <th className="table__title cell">Mensaje</th>
            </tr>
            <tr>
              <th colSpan="2" className="cell table__date">
                <div className="main__subtitle--date-container">
                  <div className="dateStart">
                    <label htmlFor="dateStart" ></label>
                    <input id="dateStart" type="date" className="input-date" placeholder="Desde: 26/02/1991" onChange={this.props.actionGetStartDate}/>
                  </div>
                  <div className="dateEnd">
                    <label htmlFor="dateEnd" ></label>
                    <input id="dateEnd" type="date" className="input-date" placeholder="Hasta: 26/03/2019" onChange={this.props.actionGetEndDate}/>
                  </div>
                </div>
                <button className="button__filter" onClick={actionFilterDate}>Filtrar</button>
              </th>
              <th className="cell">Nombre</th>
              <th className="cell">Empresa</th>
              <th className="cell">Cargo</th>
              <th className="cell" colSpan="2">Detalle</th>
            </tr>
              {this.printTable(today)}
              <th colSpan="7">Ayer y Anteriores</th>
              {this.printTable(others)}
          </table>
        </div>
      );
    }
  }

  CallHistory.propTypes = {
    actionShowList: PropTypes.func.isRequired,
    results: PropTypes.array,
    actionFilterDate: PropTypes.func.isRequired,
    actionGetStartDate: PropTypes.func.isRequired,
    actionGetEndDate: PropTypes.func.isRequired
  }


  export default CallHistory;
