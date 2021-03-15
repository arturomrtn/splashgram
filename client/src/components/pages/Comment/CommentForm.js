import React, { Component } from 'react'
import CommentService from '../../../service/album.service'

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            body: '',
            
        }

        this.commentService = new CommentService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit() {

            this.commentService
            .createComment({
                userId: this.props.loggedUser._id,
                body: this.state.body
            })
            .then(response => {
                this.setState({
                    body: ''
                })
            })
            .catch(err => this.props.handleAlert(true, 'Error', err.response.data.message))
    }

    render() {
        return (
            <div>
                
                    <input type="text" name="body" onChange={e => this.handleInputChange(e)}/>
                    <button onClick={()=>this.handleSubmit()}> Añadir comentario </button>
                
            </div>
        )
    }
}

export default CommentForm