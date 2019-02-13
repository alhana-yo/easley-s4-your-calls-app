import React, { Component, Fragment } from 'react';
import { getList } from '../services/getList';
import PropTypes from 'prop-types';


class Historico extends Component {

    sendInfo() {
        getList()
                  .then(response => console.log('Success', response))
                  .catch(error => console.error('Error', error))
      }
    
    render() {
        this.sendInfo();
        return (
            <Fragment>
                <h3>:D</h3>
            </Fragment>
        );
    }
}

export default Historico;