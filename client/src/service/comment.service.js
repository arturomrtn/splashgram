import axios from 'axios'

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comment`,
        })
    }

    getAllComments = () => this.api.get('/getAllComments')
    getOneComment = commentId => this.api.get(`/getOneComment/${commentId}`)
    createComment = commentDetails => this.api.post('/newComment', commentDetails)
    editComment = (commentId, commentDetails) => this.api.put(`/editComment/${commentId}`, commentDetails)
    deleteImage = (commentId) => this.api.delete(`/deleteComment/${commentId}`)
}

export default CommentService