import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NewCall from './components/NewCall';
import './styles/App.scss';
import { S_IFBLK } from 'constants';


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
      errorMessage: "hidden",
      callAgainClass: "",
      callBackClass: "",
      checked: false
      
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
////////////////////////////////////////////////////////////////////////////

  // getCallAction(event) {
  //   const { info } = this.state;
  //   const newInfo = { ...info, action: event.currentTarget.value };
    
  //  let callAgainVar='';
  //  let callBackVar='';

  //   if (event.currentTarget.id === 'redial'){

  //     callAgainVar= 'selectedClass';
 
  //     // this.setState ({
  //     //   info: newInfo,
  //     //   callAgainClass: 'selectedClass',
  //     //   callBackClass: ''
  //     // });
  //   } else {
  //     callBackVar='selectedClass'
  //     // this.setState({ 
  //     //   info: newInfo, 
  //     //   callAgainClass: '',
  //     //   callBackClass: 'selectedClass'

  //     // });

  //     if ( this.state.checked === false){
  //     this.setState({ checked:true })
  //     console.log("click1")
  //     } else if(this.state.checked === true){
  //     this.setState({ checked:false })
  //     console.log("click2")
    
  //     }
  //   }
  //    this.setState({ 
  //        info: newInfo, 
  //       callAgainClass: callAgainVar,
  //        callBackClass: callBackVar

  //      });
  // }

//////////////////////////////////////////////////////////
getCallAction(event) {
  const { info } = this.state;
  const newInfo = { ...info, action: event.currentTarget.value };
  let state = {
    info: newInfo,
    callAgainClass: '',
    callBackClass: ''
  };


//   if (event.currentTarget.id === 'redial'){

//     state = {
//       info: newInfo,
//       callAgainClass: 'selectedClass',
//       callBackClass: ''
//     };
//     if (event.currentTarget.ckecked === true)

//   }else if (event.currentTarget.id === 'call-back'){
    
//     state = {
//       info: newInfo, 
//       callAgainClass: '',
//       callBackClass: 'selectedClass'
//     };
    
// }  

  if (event.currentTarget.checked === false && event.currentTarget.id === 'redial'){
    state ={
      checked:true,
      info: newInfo, 
      callAgainClass: 'selectedClass',
      callBackClass: ''
    };
    } else if (event.currentTarget.checked === false && event.currentTarget.id === 'call-back'){
      state ={
        checked:true,
        info: newInfo, 
        callAgainClass: '',
        callBackClass: 'selectedClass'
      };
    }
    else if (event.currentTarget.checked === true){
      state ={
        checked:false,
        info: newInfo, 
        callAgainClass: '',
        callBackClass: ''
      };
    }
  this.setState(state);
}



/////////////////////////////////////////////////////////////////////////////////





//   getCallAction(event) {
//     const { info } = this.state;
//     const newInfo = { ...info, action: event.currentTarget.value };
    
//     const callAgain = '';
//     const callBack = '';

   
  

//   if ( this.state.checked === false){
//     this.setState({ checked:true })
//     console.log("click1")
//   } else if(this.state.checked === true){
//     this.setState({ checked:false })
//     console.log("click2")
  
// }
//     if (event.currentTarget.id === 'redial'){
 
//       this.setState ({
//         info: newInfo,
//         callAgainClass: 'selectedClass',
//         callBackClass: ''
//       });
//     } else {
//       this.setState({ 
//         info: newInfo, 
//         callAgainClass: '',
//         callBackClass: 'selectedClass'

//       });

//      if ( this.state.checked === false){
//       this.setState({ checked:true })
//       console.log("click1")
//     } else if(this.state.checked === true){
//       this.setState({ checked:false })
//       console.log("click2")
    
//   }
// }
//   }

    

  
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
      const optionsArray= this.selectPersonRequested.current.getElementsByTagName("option");

      for(let i=0; i<optionsArray.length; i++){

        if(optionsArray[i].label.includes(addedBy)){
          optionsArray[i].disabled = true;
          optionsArray[i].style.display="none";
        }else{
          optionsArray[i].disabled = false;
          optionsArray[i].style.display="block";
        }

      }
      
    }

  }

  
  
  render() {
    return (
      <div className="App">
        <Header />

        <main className="main">
          <div className="form__wrapper">
      
            <Menu />

            <NewCall preventSubmission={this.preventSubmission} getWhoCalls={this.getWhoCalls} errorPerson={this.state.errorPerson} getRequestedEmployee ={this.getRequestedEmployee} errorIncomingData={this.state.errorIncomingData} getName={this.getName} getCompany={this.getCompany} getPosition={this.getPosition} getOtherInfo={this.getOtherInfo} getEmail={this.getEmail} getPhone={this.getPhone} errorCallAction={this.state.errorCallAction} getCallAction={this.getCallAction} getMessage={this.getMessage} errorMessage={this.state.errorMessage} sendForm={this.sendForm} deselectOption={this.deselectOption} selectPersonRequested ={this.selectPersonRequested} callBackClass={this.state.callBackClass} callAgainClass={this.state.callAgainClass} />
        
          </div>
          
          <div className={`modal ${this.state.succesMessage}`}>La llamada a {this.state.info.personRequested} se ha registrado correctamente y ya se ha notificado.</div> 
        </main>
      </div>
    );
  }
}

export default App;
