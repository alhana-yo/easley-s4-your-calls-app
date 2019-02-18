import React, { Component, Fragment } from 'react';
import * as moment from 'moment';






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

        //array donde almacenamos las llamadas de hoy
        const today = results.filter(item => {
          const loggedTime = moment(item.loggedAt, 'YYYY-MM-DD');
          return loggedTime.isSame(now);
        });

        //array donde almacenamos el resto de llamadas
        const others = results.filter(item => {
          const loggedTime = moment(item.loggedAt, 'YYYY-MM-DD');
          return !loggedTime.isSame(now);
        });

        return (

                <div className="wrapper__callHistory">


                    <table className="table">

                      <tr>
                        <th><h2>Fecha/hora</h2></th>
                        <th><h2>Preguntaron por</h2></th>
                        <th colSpan="4"><h2>Llamó</h2></th>
                        <th><h2>Mensaje</h2></th>
                      </tr>

                      <tr>
                        <th colspan="2">
                          <div className="main__subtitle--date-container">
                              <div className="dateStart">
                                <label htmlFor="dateStart" ></label>
                                <input id="dateStart" type="text" className="" placeholder="Desde: 26/02/1991" onKeyUp={this.props.actionGetStartDate}/>
                              </div>
                              <div className="dateEnd">
                                <label htmlFor="dateEnd" ></label>
                                <input id="dateEnd" type="text" className="" placeholder="Hasta: 26/03/2019" onKeyUp={this.props.actionGetEndDate}/>
                              </div>
                          </div>
                          <button className="button__filter" onClick={actionFilterDate}>Filtrar</button>
                        </th>
                        <th>
                          <h4>Nombre</h4>
                        </th>
                        <th>
                          <h4>Empresa</h4>
                        </th>
                        <th>
                          <h4>Cargo</h4>
                        </th>
                        <th>
                          <h4 colspan="2">Detalle</h4>
                        </th>
                      </tr>
                        {this.printTable(today)}
                        <th colspan="7">
                          <h4>Ayer y Anteriores</h4>
                        </th>
                        {this.printTable(others)}

                    </table>
                </div>

        );
    }
}

export default CallHistory;



