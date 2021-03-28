import React, { Component } from 'react'
import '../Comment/CommentForm.css'
import { Card, Button } from 'react-bootstrap'
import CommentCard from '../Comment/CommentCard'

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

            body: '',
            //            comments: []
        }

        //        this.commentService = new CommentService()
    }
    /*
        componentDidMount() {
           
            this.refreshComments()
        } 
    
        refreshComments() {
            const {imageId} = this.props
            if ( !imageId ) return
    
            this.commentService
    
             .getAllCommentsFromImage().then( response => {
                console.log( response.data )
    
                this.setState({
                    comments: response.data
                })
             })
        }
    */
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    createComment() {
        this.props.onCreateComment({
            userId: this.props.loggedUser._id,
            body: this.state.body,
            imageId: this.props.imageId
        })
        this.setState({
            body: ''
        })
        /*           this.commentService
                   .createComment({
                       userId: this.props.loggedUser._id,
                       body: this.state.body,
                       imageId: this.props.imageId
                   })
                   .then(response => {
                       this.refreshComments()
                       this.setState({
                           body: ''
                       })
                   })
                   .catch(err => console.error( 'Error', err.response.data.message))
       */
    }

    render() {
        return (
            <div className="comment">

                <p>¿Te gustaría añadir un comentario a la imagen?</p>
                <input type="text" name="body" value={this.state.body} onChange={e => this.handleInputChange(e)} />
                <Button onClick={() => this.createComment()}>
                    Añadir comentario
                    </Button>
                <div>
                    <strong>Comentarios:</strong>
                    {
                        this.props.image?.comments?.map(comment => (

                            <CommentCard comment={comment} />

                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CommentForm
