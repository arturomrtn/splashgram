const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment.model")

router.post('/newComment', (req, res) => {
    
    const {userId, body} = req.body

    Comment
        .create({userId, body})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving comment', err }))
})


router.get('/getOneComment/:comment_id', (req, res) => {

    Comment
        .findById(req.params.comment_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching comment', err }))
})

router.get('/getAllComments', (req, res) => {

    Comment
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching comments', err }))
})

router.get('/getAllCommentsFromImage/:image_id', (req, res) => {

    Comment
        .find({ imageId: req.params.image_id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching comments from the image', err }))
})

router.put('/editComment/:comment_id', (req, res) => {

    Comment
        .findByIdAndUpdate(req.params.image_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing comment', err }))

})

router.delete('/deleteComment/:comment_id', (req, res) => {

    Comment
        .findByIdAndRemove
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting comment', err }))
})


module.exports = router

