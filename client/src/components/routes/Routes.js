import { React } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ImageDetails from '../pages/Image/ImageDetails'
import Album from '../pages/Album/Album'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/LoginForm'
import UnsplashSuggestions from '../pages/Image/UnsplashSuggestions'
import AlbumContent from '../pages/Album/AlbumContent'
import UsersImages from '../pages/Image/UsersImages'
import UserProfile from '../pages/auth/UserProfile'

const Routes = ({ loggedUser, storeUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={props => <UnsplashSuggestions {...props} key={new Date(Date.now()).toISOString()} />} />
            <Route path="/image-details" render={props => <ImageDetails loggedUser={loggedUser} {...props} />} />
            <Route path="/signup" render={props => <SignUp storeUser={storeUser} loggedUser={loggedUser} {...props} />} />
            <Route path="/login" render={props => <Login storeUser={storeUser} loggedUser={loggedUser}{...props} />} />
            <Route path="/myalbums" render={props => <Album storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route path="/myalbums-content" render={props => <AlbumContent loggedUser={loggedUser} {...props} />} />
            <Route path="/users-images" render={props => <UsersImages loggedUser={loggedUser} {...props} />} />
            <Route path="/user-profile" render={props => loggedUser ? <UserProfile loggedUser={loggedUser} {...props} /> : <Redirect to="/login" />} />

        </Switch>

    )
}

export default Routes
