import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
        })
    }

    login = userData => this.api.post('/login', userData)
    signUp = userData => this.api.post('/signUp', userData)
    logOut = () => this.api.post('/logout')
    isLoggedIn = () => this.api.get('/loggedin')
}

export default AuthService