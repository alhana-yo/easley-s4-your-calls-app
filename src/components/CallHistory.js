import React, { Component } from 'react';

class CallHistory extends Component {
    componentDidMount(){
        this.props.actionShowList();
    }
    render() {
        const {results, actionFilterDate} = this.props;
        return (

                <div className="wrapper__callHistory">

                    <table className="table">

                      <tr>
                        <th className="table__title title__date cell" >Fecha/hora</th>
                        <th className="table__title title__questions cell">Preguntaron por</th>
                        <th className="table__title cell" colSpan="4">Llamó</th>
                        <th className="table__title cell">Mensaje</th>
                      </tr>

                      <tr>
                        <th colspan="2" className="cell table__date">
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
                        <th className="cell">
                          <h4>Nombre</h4>
                        </th>
                        <th className="cell">
                          <h4>Empresa</h4>
                        </th>
                        <th className="cell">
                          <h4>Cargo</h4>
                        </th>
                        <th className="cell">
                          <h4 colspan="2">Detalle</h4>
                        </th>
                      </tr>
                        {results.map(item => {
                            return(
                                <tr className="table__date--item" key={item._id} >
                                    <td className="cell date--item">
                                            <p className="date__day">{item.loggedAt.split("T")[0].split("-").reverse().join("/")}</p>
                                            <p className="hour">{item.loggedAt.split("T")[1].split("", 5)}h</p>
                                    </td>
                                    <td className="cell">
                                        <p className="askfor">{item.personRequested}</p>
                                    </td>

                                    <td className="cell">
                                        <p className="name">{item.name}</p>
                                    </td>
                                    <td className="cell">
                                        <p className="company">{item.company}</p>
                                    </td>
                                    <td className="cell">
                                        <p className="position">{item.position}</p>
                                    </td>
                                    <td className="cell">
                                        <p className="otherinfo">{item.otherInfo}{item.email}{item.telephone}</p>
                                    </td>

                                    <td className="cell">

                                            <p className="message">{item.message}</p>
                                            <p className="action">{item.action}</p>
                                    </td>

                                </tr>
                            );
                        })}

                    </table>
               </div>

        );
    }
}

export default CallHistory;



