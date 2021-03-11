import React, { Component } from 'react'
import UnsplashService from '../../../service/unsplash.service'
import { Link } from 'react-router-dom'
import './UnsplashSuggestions.css'

class UnsplashSuggestions extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
        this.unsplashService = new UnsplashService()
    }

 
    componentDidMount() {
        
        const query = this.getQuery()

        console.log('***', query )

        if ( query ) {
             this.unsplashService
            .searchImages(query)
            .then(images => {
                this.setState({
                    images: images
                })
            })
            
        }
        else {
            this.unsplashService
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


        return(
            <div className='unsplash-suggestions'>
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

