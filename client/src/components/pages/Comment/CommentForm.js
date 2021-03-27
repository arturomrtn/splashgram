import React, { Component } from 'react'
import CommentService from '../../../service/comment.service'
import AuthService from '../../../service/auth.service'
import '../Comment/CommentForm.css'
import { Card } from 'react-bootstrap'

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
                
                    <input type="text" name="body" value={this.state.body} onChange={e => this.handleInputChange(e)}/>
                    <button onClick={()=>this.createComment()}> 
                        Añadir comentario 
                    </button>
                    <div className="comment-body">
                        <strong>Comentarios:</strong>
                    {
                        this.props.image?.comments?.map( comment => (
                            
                            <CommentCard comment={ comment } />

                        ))
                    }
                </div>
            </div>
        )
    }
}

class CommentCard extends Component {

    constructor( props ) {
        super( props )

        this.state = {

         username: '',

        }

        this.authService = new AuthService()
    }

    componentDidMount() {
        this.authService.getUser(this.props.comment.userId)
        .then( resp => {
            const user = resp.data
            this.setState({username: user.username})    
        })
    }


    render() {
        const { comment } = this.props

        return (
            <>
                <p>{ comment.body }</p>
                <p>@{ this.state.username }</p>
            </>
        )
    }

}


export default CommentForm
