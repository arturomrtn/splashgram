import { React } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ImageDetails from './ImageDetails'
import Register from './Register'
import Login from './LoginForm'
import UnsplashSuggestions from './UnsplashSuggestions'

const Routes = ({storeUser}) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <UnsplashSuggestions />} />
            <Route path="/image-details" render={props => <ImageDetails {...props} />} />
            <Route path="/register" render={props => <Register storeUser={storeUser}  {...props} />} />
            <Route path="/login" render={props => <Login storeUser={storeUser} {...props} />} />
        </Switch>

    )
}

export default Routes
