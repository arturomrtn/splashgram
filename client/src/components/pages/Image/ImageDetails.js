import React, { Component } from 'react'
//import { Dropdown } from 'react-bootstrap'
import AlbumService from '../../../service/album.service'
import CommentForm from '../Comment/CommentForm'
import './ImageDetails.css'

class ImageDetails extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            image: null,
            selectedAlbum: {},
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

        this.albumService

            .getAlbumsByOwner(this.props.loggedUser?._id)
            //'604378e1b1e00ba51c9408d1'
            .then(response => {
                this.setState({ 
                    selectedAlbum: response.data[0],
                    albums: response.data,
                    image: this.getSelectedImage()
                })
            })
            .catch(err => console.log(err))
    }

    handleSelectChange(event) {
         this.setState({ selectedAlbum: this.state.albums.find( album => album.name === event.target.value ) })
    }

    handleAddToAlbum() {
        if ( !this.state.selectedAlbum?.images ) this.state.selectedAlbum.images = []
        this.state.selectedAlbum.images.push( this.state.image )
        console.log('-------------+++++++++++++++++++++++++++', this.state.selectedAlbum)
        // this.albumService.editAlbum(this.state.selectedAlbum._id, this.state.selectedAlbum)
        this.albumService.addImageToAlbum( this.state.selectedAlbum._id, this.state.selectedAlbum, this.state.image )
    }

    getSelectedImage() {
        const { location } = this.props
        const params = new URLSearchParams(location.search)
        return {
            _id: params.get('id'),
            link: params.get('link'),
            description: params.get('description'),
            author: params.get('author'),
            comments: []
        }

    }

    addComment( comment ) {
        this.setState( prevState => {
            console.log( prevState.image )
            prevState.image.comments.push( comment )

            return ({ image: {...prevState.image } })
        })
    }

    render() {
        const { albums, selectedAlbum, image } = this.state
        console.log( '------', image )
        return (
            <div className="image-details">

                <img src={image?.link} width="100%" />
                <p> Descripción: {image?.description}</p>
                <p> Autor: {image?.author}</p>
                 
                <p>Selecciona un álbum:</p>
                <select name="selectedAlbum" value={ selectedAlbum?.name || '' } onChange={event => this.handleSelectChange(event)}>
                    {albums?.map( (elm, index) => {
                        return <option key={index} value={elm.name}>{elm.name}</option>
                    })}
                </select>
                <CommentForm image={ image } loggedUser={this.props.loggedUser} onCreateComment={ comment => this.addComment( comment )}/>
                <button onClick={() => this.handleAddToAlbum()}>Añadir a un álbum</button>
            </div>
        )
    }
}

export default ImageDetails

