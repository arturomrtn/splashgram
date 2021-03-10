import React, { Component } from 'react'
//import { Dropdown } from 'react-bootstrap'
import AlbumService from '../../../service/album.service'

class ImageDetails extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            image: null,
            selectedAlbum: {}

        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

        this.albumService

            .getAlbumsByOwner(this.props.storeUser._id || '604378e1b1e00ba51c9408d1')
            .then(response => {
                this.setState({ albums: response.data })
            })
            .catch(err => console.log(err))
    }

    handleSelectChange(event) {
        this.setState({ selectedAlbum: this.state.albums[ event.target.value ] })
    }

    handleAddToAlbum() {
        if ( !this.state.selectedAlbum.images ) this.state.selectedAlbum.images = []
        this.state.selectedAlbum.images.push( this.getSelectedImage())
        // this.albumService.editAlbum(this.state.selectedAlbum._id, this.state.selectedAlbum)
        this.albumService.addImageToAlbum( this.state.selectedAlbum._id, this.state.selectedAlbum, this.getSelectedImage() )
    }

    getSelectedImage() {
        const { location } = this.props
        const params = new URLSearchParams(location.search)
        return {
//            _id: params.get('id'),
            link: params.get('link'),
            description: params.get('description'),
            author: params.get('author')
        }

    }

    render() {
        const { albums } = this.state
        const { link, author, description } = this.getSelectedImage()
        return (
            <div>

                <img src={link} width="100%" />
                <p>{description}</p>
                <p>{author}</p>
                <select name="selectedAlbum" onChange={event => this.handleSelectChange(event)}>
                    {albums?.map( (elm, index) => {
                        return <option key={elm.name} value={index}>{elm.name}</option>
                    })}
                </select>
                <button onClick={() => this.handleAddToAlbum()}>Add to album</button>
            </div>
        )
    }
}

export default ImageDetails

