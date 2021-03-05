import { Component } from 'react'
import './App.css';
import Register from './components/Register.js'
import Login from './components/Login-form.js'
import AuthService from './service/auth.service'
import Header from './components/Header.js'
import { Switch, Route } from 'react-router-dom'
import UnsplashSuggestions from './components/UnsplashSuggestions'
import Routes from './components/Routes'


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
        <Header/>
        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
      </div>
    );
  }
}
