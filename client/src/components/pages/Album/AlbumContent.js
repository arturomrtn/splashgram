import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import ImageService from '../../../service/image.service'
import { Link } from 'react-router-dom'
import './AlbumContent.css'
import { Button } from 'react-bootstrap'


class AlbumContent extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
        }

        this.albumService = new AlbumService()
        this.imageService = new ImageService()
    }

    componentDidMount() {

        this.refreshAlbum()

    }

    refreshAlbum() {

        const { location } = this.props

        const params = new URLSearchParams(location.search)

        this.albumService
            .getOneAlbum(params.get('id'))
            .then(response => {
                this.setState({ images: response.data.images })
            })
            .catch(err => console.log(err))

    }

    deleteImage(imageId) {
        this.imageService
            .deleteImage(imageId)
            .then(response => this.refreshAlbum())
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="album-content">
                {
                    this.state.images.map(image => (
                        <Link key={image.link} to={`/image-details?id=${image._id}&author=${image.author}&link=${image.link}&description=${image.description}`} className="btn btn-dark">
                            <img
                                src={image.link}
                                alt={image.description}
                                width="200px"
                            />
                            <p>Autor: {image.author}</p>
                            <p>Descripción: {image.description}</p>
                            <Button onClick={() => this.deleteImage(this.imageId)} className="btn btn-info">Borrar imagen del álbum</Button>
                        </Link>


                    ))
                }
            </div>
        )
    }
}

export default AlbumContent
