import React, { Component } from 'react';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    username: "Super Jigs"
  }


  userevewntHandler = (event) =>{
    this.setState({
      username: event.target.value
    })
    
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.userevewntHandler}
        currentName= {this.state.username}/>
       <UserOutput userName="Jignesh Sharma" stateuser={this.state.username} />

       <UserOutput userName="Jignesh Sharma" stateuser={this.state.username} />
       
      </div>
    );
  }
}

export default App;
