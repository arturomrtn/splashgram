import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import { Link } from 'react-router-dom'
import './AlbumContent.css'


class AlbumContent extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            //user: this.props.storeUser
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

        const { location } = this.props

        const params = new URLSearchParams(location.search)

        this.albumService
        .getOneAlbum(params.get( 'id' ))
        .then(response => {
            this.setState({ images: response.data.images })
        })
        .catch(err => console.log(err))
    }
    

    render() {
        return (
            <div className="album-content">
            {
                this.state.images.map( image => (
                    <Link key={image.link} to={`/album-content?author=${ image.author }&link=${ image.link }&description=${ image.description }`} className="btn btn-dark"> 
                        <img 
                            src= {image.link} 
                            alt={image.description} 
                            width="200px"
                        />
                        <p>Autor: {image.author}</p>
                        <p>Descripción: {image.description}</p>
                        
                    </Link>
                ))
            }
        </div>
        )
    }
}

export default AlbumContent