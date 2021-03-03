import { Component } from 'react'
import './App.css';
import Register from './components/pages/Register'
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
}
