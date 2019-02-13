import React, { Component, Fragment } from 'react';

class CallHistory extends Component {
    componentDidMount(){
        this.props.actionShowList();
    }
    render() {
        const {results} = this.props; 
        return (
            <Fragment>
                <div className="main__title">
                    <div className="main__title--date"><h2>Fecha/hora</h2></div>
                    <div className="main__title--personRequested"><h2>Preguntaron por</h2></div>
                    <div className="main__title--whoCalls"><h2>Llamó</h2></div>
                </div>
                <div className="main__subtitle">
                    <div className="main__subtitle--date"><h4>87/87/87</h4></div>
                    <div className="main__sibtitle--name"><h4>Nombre</h4></div>
                    <div className="main__subtitle--company"><h4>Empresa</h4></div>
                    <div className="main__subtitle--other"><h4>Cargo / Detalles / Contacto</h4></div>
                </div>
                <ul className="list">
                    {results.map(item => {
                        return(
                            <li className="list__item" key={item._id} >
                                <div className="list__item--container">
                                    <div className="date">
                                        <p className="date">{item.loggedAt.split("T")[0].split("-").reverse().join("/")}</p> 
                                        <p className="hour">{item.loggedAt.split("T")[1].split("", 5)}h</p>
                                    </div>
                                    <p className="askfor">{item.personRequested}</p>
                                    <p className="name">{item.name}</p>
                                    <p className="company">{item.company}</p>
                                    <p className="otherinfo">{item.position}{item.otherInfo}{item.email}{item.telephone}</p>
                                    <div className="messageAndAction">
                                        <p className="message">{item.message}</p>  
                                        <p className="action">{item.action}</p>  
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                
                </ul>
                
            </Fragment>
        );
    }
}

export default CallHistory;