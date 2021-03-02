const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment.model")

router.post('/newComment', (req, res) => {
    console.log(req.body)

    Comment
        .create({
        userId: req.body.userI,
        body: req.body.body,
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving comment', err }))
})


router.get('/getOneImage/:image_id', (req, res) => {

    Comment
        .findById(req.params.comment_id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching comment', err }))
})

router.get('/getAllComments', (req, res) => {

    Comment
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching comments', err }))
})

router.put('/editImage/:image_id', (req, res) => {

    Comment
        .findByIdAndUpdate(req.params.image_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing comment', err }))

})

router.delete('/deleteImage/:image_id', (req, res) => {

    Comment
        .findByIdAndRemove
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting comment', err }))
})


module.exports = router

