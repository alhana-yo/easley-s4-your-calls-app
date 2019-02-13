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
                {console.log(results)}
                    {results.map(item =>{
                        return(
                            <li className="list__item">
                                <div className="list__item--container">
                                  <p className="date">{}</p>
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