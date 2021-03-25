import { Component } from 'react'
import 'dotenv/config'
import './App.css';
import AuthService from '../service/auth.service'
import Navigation from './layout/Navigation/Navigation'
//import { Switch, Route } from 'react-router-dom'
import Routes from './routes/Routes'
import '../components/layout/Footer.css'



export default class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      //searchText
    }
    this.authService = new AuthService()
  }

  storeUser(loggedUser) {
    this.setState({ loggedUser }, () => console.log('Usuario modificado:', this.state.loggedUser))
  }

  fetchUser() {
    this.authService
      .isLoggedIn()
      .then(response => this.storeUser(response.data))
      .catch(() => this.storeUser(undefined))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render()
  {
    return(
      <div> 
        <Navigation  storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser}/>
        <main>
          <Routes  storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
      </div>
    );
  }
}
