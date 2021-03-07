import { Component } from 'react'
import 'dotenv/config'
import './App.css';
import AuthService from '../service/auth.service'
import Navigation from './layout/Navigation/Navigation'
//import { Switch, Route } from 'react-router-dom'
//import UnsplashSuggestions from './components/UnsplashSuggestions'
import Routes from './routes/Routes'



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
        <Navigation storeUser={this.state.loggedUser}/>
        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
      </div>
    );
  }
}
