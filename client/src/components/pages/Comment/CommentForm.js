import React, { Component } from 'react'
import CommentService from '../../../service/album.service'

class CommentForm extends Component {
    constructor() {
        super(props)

        this.state = {
            userId: this.props.loggedUser ? this.props.loggedUser._id : '',
            body: '',
            
        }

        this.commentService = new CommentService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CommentForm