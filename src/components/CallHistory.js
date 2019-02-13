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
                                {item.name}
                            </li>
                        );
                    })}
                
                </ul>
                
            </Fragment>
        );
    }
}

export default CallHistory;