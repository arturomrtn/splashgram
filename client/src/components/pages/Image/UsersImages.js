import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageService from '../../../service/image.service'

class UsersImages extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
        this.imageService = new ImageService()
    }


    componentDidMount() {
        this.imageService
        .getAllImages()
        .then(
            response => this.setState({ images: response.data })
        )
    }


    render() {

        const { images } = this.state


        return (
            <div className='unsplash-suggestions'>
                {
                    images.map(image => (
                        <Link to={`/image-details?id=${image._id}&author=${image.author}&link=${image.link}&description=${image.description}`} className="btn btn-dark">
                            <img
                                key={image.link}
                                src={image.link}
                                alt={image.description}
                                width="250px"
                            />
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default UsersImages
