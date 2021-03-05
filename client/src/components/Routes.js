import { React } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ImageDetails from './ImageDetails'
import UnsplashSuggestions from './UnsplashSuggestions'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <UnsplashSuggestions />} />
            <Route path="/image-details/:id" render={props => <ImageDetails {...props} />} />

        </Switch>

    )
}

export default Routes
