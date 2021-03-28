import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
        })
    }

    login = userData => this.api.post('/login', userData)
    signUp = userData => this.api.post('/signUp', userData)
    logOut = () => this.api.post('/logOut')
    isLoggedIn = () => this.api.get('/loggedIn')
    getUser = (user_id) => this.api.get(`/getUser/${user_id}`)
    updateUser = (user) => this.api.put(`/updateUser`, user)
}

export default AuthService