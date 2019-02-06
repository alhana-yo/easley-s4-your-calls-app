import React, { Component, Fragment } from 'react';
import Form from './Form';
import Button from './Button';


class NewCall extends Component {

    render() {
        return (

            <Fragment>
                <Form preventSubmission={this.props.preventSubmission} getWhoCalls={this.props.getWhoCalls} errorPerson={this.props.errorPerson} getRequestedEmployee={this.props.getRequestedEmployee} errorIncomingData={this.props.errorIncomingData} getName={this.props.getName} getCompany={this.props.getCompany} getPosition={this.props.getPosition} getOtherInfo={this.props.getOtherInfo} getEmail={this.props.getEmail} getPhone={this.props.getPhone} errorCallAction={this.props.errorCallAction} getCallAction={this.props.getCallAction} getMessage={this.props.getMessage} errorMessage={this.props.errorMessage} />
                <Button sendForm={this.props.sendForm}/>

            </Fragment>
        );
    }

}

export default NewCall;