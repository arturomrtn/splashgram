import React, { Component } from 'react'
import CommentService from '../../../service/comment.service'

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            body: '',
            comments: []
            
        }

        this.commentService = new CommentService()
    }

    componentDidMount() {
       
        this.commentService

         .getAllCommentsFromImage(this.props.imageId).then( response => {
            console.log( response.data )

            this.setState({
                comments: response.data
            })
         })
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
            .catch(err => console.error( 'Error', err.response.data.message))

    }

    render() {
        return (
            <div>
                
                    <input type="text" name="body" onChange={e => this.handleInputChange(e)}/>
                    <button onClick={()=>this.handleSubmit()}> Añadir comentario </button>
                    {
                        this.state.comments?.map( comment => (
                            <p>{ comment.body }</p>
                        ))
                    }
                
            </div>
        )
    }
}

export default CommentForm
