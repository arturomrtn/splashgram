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
    deleteComment = (commentId) => this.api.delete(`/deleteComment/${commentId}`)
    getAllCommentsFromImage = (imageId) => this.api.get(`/getAllCommentsFromImage/${imageId}`)
    addCommentToImage = (image) => this.api.post(`/addCommentToImage`, image)
}

export default CommentService