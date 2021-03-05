import React, { Component } from 'react'
import UnsplashService from '../service/unsplash.service'
import { Link } from 'react-router-dom'

class UnsplashSuggestions extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        
        const unsplashService = new UnsplashService()

        unsplashService
        .getRandomImages()
        .then(images => {
            this.setState({
                images: images
            })
        })
    }

    render(){

        const {images} = this.state

        return(
            <div>
                {
                    images.map( image => (
                        <Link to={`/image-details?author=${ image.author }&link=${ image.link }&description=${ image.description }`} className="btn btn-dark"> 
                            <img 
                                key={image.link} 
                                src= {image.link} 
                                alt={image.description} 
                                width="200px"
                            />
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default UnsplashSuggestions

