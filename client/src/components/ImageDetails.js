import React, { Component } from 'react'

class ImageDetails extends Component {

    constructor() {
        super()
        this.state = {
        
        }
    }


    render(){
        const { author, link, description } = this.props
        console.log(this.props)
        return(
            <div>
                <img src={link}/>
                <p>{description}</p>
                <p>{author}</p>

            </div>
        )
    }
}

export default ImageDetails