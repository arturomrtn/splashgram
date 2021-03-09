import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'

class AlbumForm extends Component {
    constructor() {
        super(props)

        this.state = {
            userId: this.props.loggedUser ? this.props.loggedUser._id : '',
            name: '',
            description: '',


        }
        this.albumService = new AlbumService()
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AlbumForm
