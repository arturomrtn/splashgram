import React, { Component } from 'react'
import './App.css';
import { UserPanel } from './components/user/user-panel';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      user: undefined
    }
  }

  render() {
    return (
      <div className="App">
        <UserPanel storeUser={ user => this.setState({ user }) }/>
      </div>
    );
  }
}

export default App;
