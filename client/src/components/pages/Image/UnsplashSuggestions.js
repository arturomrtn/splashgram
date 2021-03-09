import React, { Component } from 'react'
import UnsplashService from '../../../service/unsplash.service'
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

        const query = this.getQuery()

        console.log('***', query )

        if ( query ) {
            unsplashService
            .searchImages(query)
            .then(images => {
                this.setState({
                    images: images
                })
            })
            
        }
        else {
            unsplashService
            .getRandomImages()
            .then(images => {
                this.setState({
                    images: images
                })
            })
        }
    }
    getQuery() {
        const { location } = this.props
        const params = new URLSearchParams(location.search)
        return params.get('queryString')
    }

    render(){

        const {images} = this.state
        console.log(images)

        return(
            <div>
                {
                    images.map( image => (
                        <Link to={`/image-details?id=${image._id}&author=${ image.author }&link=${ image.link }&description=${ image.description }`} className="btn btn-dark"> 
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
