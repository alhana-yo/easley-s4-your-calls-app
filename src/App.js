import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NewCall from './components/NewCall';
import './styles/App.scss';




class App extends Component {

  constructor(props){
    super(props);

    this.selectPersonRequested = React.createRef();

    this.state= {
      info: {
        addedBy: "",
        personRequested:"",
        name: "",
        company:"",
        position:"",
        otherInfo:"",
        email:"",
        telephone: 0,
        action:"",
        message:"",    
      },
      errorIncomingData:"hidden",
      errorCallAction: "hidden",
      errorPerson: "hidden",
      succesMessage: "hidden",
      errorMessage: "hidden"
      
  }

   
   
    this.getWhoCalls = this.getWhoCalls.bind(this);
    this.getRequestedEmployee = this.getRequestedEmployee.bind(this);
    this.getName = this.getName.bind(this);
    this.getCompany = this.getCompany.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getOtherInfo = this.getOtherInfo.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getCallAction = this.getCallAction.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
    this.isEmptyOrNot = this.isEmptyOrNot.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.deselectOption = this.deselectOption.bind(this);

  }

  getWhoCalls(event) {
    const { info } = this.state;
    const newInfo = { ...info, addedBy: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getRequestedEmployee(event) {
    const { info } = this.state;
    const newInfo = { ...info, personRequested: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getName(event) {
    const { info } = this.state;
    const newInfo = { ...info, name: event.currentTarget.value };
    this.setState({ info: newInfo });
  }
  
  getCompany(event) {
    const { info } = this.state;
    const newInfo = { ...info, company: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPosition(event) {
    const { info } = this.state;
    const newInfo = { ...info, position: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getOtherInfo(event) {
    const { info } = this.state;
    const newInfo = { ...info, otherInfo: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getEmail(event) {
    const { info } = this.state;
    const newInfo = { ...info, email: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPhone(event) {
    const { info } = this.state;
    const newInfo = { ...info, telephone: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getCallAction(event) {
    const { info } = this.state;
    const newInfo = { ...info, action: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getMessage(event) {
    const { info } = this.state;
    const newInfo = { ...info, message: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  preventSubmission(event) {

    event.preventDefault();
  }



  sendInfo() {

    console.log(this.state.info)

    const ENDPOINT = 'https://adalab.interacso.com/call';

      fetch(ENDPOINT, {

              method: "POST",
              body: JSON.stringify(this.state.info),
              cache: "no-cache",
              headers: {
                  "content-type": "application/json"
              }
            })

              .then(response=> response.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
              .then(this.setState({
                  succesMessage:""}))
              .catch(error => console.error('Error:', error));
  }


  sendForm(event){
    event.preventDefault();
    this.isEmptyOrNot();
  }

  isEmptyOrNot(){
    const incomingInfo = this.state.info;

      if (incomingInfo.personRequested === ""){
        this.setState({
          errorPerson: ""
        });

      } else if (incomingInfo.name === "" && incomingInfo.company === "" && incomingInfo.position === "" && incomingInfo.telephone === 0 && incomingInfo.email === "" && incomingInfo.otherInfo === ""){
      console.log('entro en el if.');
      this.setState({
        errorIncomingData: "",
        errorPerson: "hidden"
      });

      } else if (incomingInfo.action === "" && incomingInfo.message === ""){
      
      this.setState({
        errorIncomingData: "hidden",
        errorCallAction:"",
        errorPerson: "hidden",
        errorMessage:""
        
      });

    } else if (incomingInfo.action !== "" && incomingInfo.message === "") {
      this.setState({
        errorIncomingData: "hidden",
        errorCallAction:"hidden",
        errorPerson: "hidden",
        errorMessage:""
        
      });

    } else {
      this.setState({
        errorIncomingData: "hidden",
        errorCallAction:"hidden",
        errorPerson: "hidden",
        errorMessage:"hidden"
      }); 

      this.sendInfo();
      console.log("enviar info al servidor");
    }
  }
  


  deselectOption(event){

    const addedBy= this.state.info.addedBy;

    if(addedBy!==""){
      const options= this.selectPersonRequested.current.getElementsByTagName("option");

      console.log(options)


    }

  }
  
  render() {
    return (
      <div className="App">
        <Header />

        <main className="main">
          <div className="form__wrapper">
      
            <Menu />

            <NewCall preventSubmission={this.preventSubmission} getWhoCalls={this.getWhoCalls} errorPerson={this.state.errorPerson} getRequestedEmployee ={this.getRequestedEmployee} errorIncomingData={this.state.errorIncomingData} getName={this.getName} getCompany={this.getCompany} getPosition={this.getPosition} getOtherInfo={this.getOtherInfo} getEmail={this.getEmail} getPhone={this.getPhone} errorCallAction={this.state.errorCallAction} getCallAction={this.getCallAction} getMessage={this.getMessage} errorMessage={this.state.errorMessage} sendForm={this.sendForm} deselectOption={this.deselectOption} selectPersonRequested ={this.selectPersonRequested} />
        

        
          </div>
          
          <div className={`modal ${this.state.succesMessage}`}>La llamada a {this.state.info.personRequested} se ha registrado correctamente y ya se ha notificado.</div> 
        </main>
      </div>
    );
  }
}

export default App;
