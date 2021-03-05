import React, { Component } from 'react'

class ImageDetails extends Component {

    constructor() {
        super()
        this.state = {
        
        }
    }


    render(){
        const {location} = this.props
        const params = new URLSearchParams(location.search)

        return(
            <div>

                <img src={params.get('link')} width="100%"/>
                <p>{params.get ('description')}</p>
                <p>{params.get ('author')}</p>
                <input></input>
                <button> Add to album </button>

            </div>
        )
    }
}

export default ImageDetails