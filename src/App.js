import React, { Component } from 'react';
import './styles/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1></h1>
        <main className="main">
          <div className="main__whoCalls">
            <h2 className="main__whocalls--title">¿Quién atendió la llamada</h2>
            <select className="main__employees"></select>
          </div>

          <div className="main__requested--employee">
            <h2 className="main__requested--employee-title">¿Por quién preguntaban?</h2>
            <select className="main__employees"></select>
          </div>

          
        </main>
      </div>
    );
  }
}

export default App;
