import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `http//localhost:5000/api/auth`,
        })
    }

    login = userData => this.api.post('/login', userData)
    register = userData => this.api.post('/register', userData)
    logOut = () => this.api.post('/logout')
    isLoggedIn = () => this.api.get('/loggedin')
}

export default AuthService