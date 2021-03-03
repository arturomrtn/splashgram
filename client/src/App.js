import { Component } from 'react'
import './App.css';
import Register from './components/Register.js'
import Login from './components/Login.js'
import AuthService from './service/auth.service'


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
    
    }
    this.authService = new AuthService()
  }

  storeUser(loggedUser) {
    this.setState({ loggedUser }, () => console.log('Usuario modificado:', this.state.loggedUser))
  }

  render()
  {
    return(
      <div> 
        <Register />
      </div>
    );
  }
}
