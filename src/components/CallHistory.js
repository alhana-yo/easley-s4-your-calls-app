import React, { Component, Fragment } from 'react';

class CallHistory extends Component {
    componentDidMount(){
        this.props.actionShowList();
    }
    render() {
        const {results} = this.props; 
        return (
            <Fragment>
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
                                  <p className="message">{item.message}</p>  
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