import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import AlbumsList from './AlbumsList'
import AlbumForm from './AlbumForm'
import './Album.css'

class Album extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

        this.refreshAlbums()

    }

    refreshAlbums() {
        this.albumService
            .getAlbumsByOwner(this.props.loggedUser._id)
            .then(response => {
                this.setState({ albums: response.data })
            })
            .catch(err => console.log(err))
    }

    deleteAlbum(albumId) {
        this.albumService
            .deleteAlbum(albumId)
            .then(response => this.refreshAlbums())
            .catch(err => console.log(err))
    }

    render() {

        const { albums } = this.state

        return (
            <div className="my-albums">
                <h1>Mis álbumes</h1>
                <AlbumForm loggedUser={this.props.loggedUser} onNewAlbum={() => this.refreshAlbums()} />
                <AlbumsList albums={this.state.albums} deleteAlbum={(albumId) => this.deleteAlbum(albumId)} />
            </div>
        )
    }
}

export default Album