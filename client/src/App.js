import { Component } from 'react'
import 'dotenv/config'
import './App.css';
import AuthService from './service/auth.service'
import MenuBar from './components/layout/MenuBar.js'
//import { Switch, Route } from 'react-router-dom'
//import UnsplashSuggestions from './components/UnsplashSuggestions'
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
        <MenuBar/>
        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
      </div>
    );
  }
}
