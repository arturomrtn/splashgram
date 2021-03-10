import { React } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ImageDetails from '../pages/Image/ImageDetails'
import Album from '../pages/Album/Album'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/LoginForm'
import UnsplashSuggestions from '../pages/Image/UnsplashSuggestions'

const Routes = ({storeUser}) => {

    return (
        <Switch>
            <Route path="/" exact render={ props => <UnsplashSuggestions storeUser={storeUser} {...props} key={new Date(Date.now()).toISOString()}/>} />
            <Route path="/image-details" render={props => <ImageDetails storeUser={storeUser} {...props} />} />
            <Route path="/signup" render={props => <SignUp storeUser={storeUser}  {...props} />} />
            <Route path="/login" render={props => <Login storeUser={storeUser} {...props} />} />
            <Route path="/myalbums" render={props => <Album storeUser={storeUser} /> } />
        </Switch>

    )
}

export default Routes
