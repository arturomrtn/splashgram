import React from 'react'
import AuthService from '../../../service/auth.service.service'

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
                <p>{comment.body}</p>
                <p>@{this.state.username}</p>
            </>
        )
    }

}


export default CommentCard