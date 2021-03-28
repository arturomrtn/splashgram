import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import '../Comment/CommentCard.css'
import { Card } from 'react-bootstrap'

class CommentCard extends Component {

    constructor(props) {
        super(props)

        this.state = {

            username: '',

        }

        this.authService = new AuthService()
    }

    componentDidMount() {
        this.authService.getUser(this.props.comment.userId)
            .then(resp => {
                const user = resp.data
                this.setState({ username: user.username })
            })
    }


    render() {

        const { comment } = this.props

        return (
            <>
                <Card className="comment-card">
                    <Card.Body>
                        <p><strong>{comment.body}</strong></p>
                        <p>Escrito por: <strong>@{this.state.username}</strong></p>
                    </Card.Body>
                </Card>

            </>
        )
    }

}


export default CommentCard