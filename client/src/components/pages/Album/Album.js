import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import AlbumsList from './AlbumsList'


class Album extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            //user: this.props.storeUser
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

            this.albumService
            .getAllAlbums()
            .then(response => this.setState({ albums: response.data }))
            .catch(err => console.log(err))
    }
    

    render() {
        
        const { albums } = this.state
        console.log(albums)


        return (
            <div>
                <h1>Mis albums</h1>
                 <AlbumsList albums={this.state.albums}/>
            </div>
        )
    }
}

export default Album