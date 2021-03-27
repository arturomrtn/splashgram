const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment.model")
const Image = require("../models/Image.model")
const { checkMongoId } = require("../middlewares")

router.post('/newComment', (req, res) => {
    console.log(req.body)
    Comment
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving comment', err }))
})


router.get('/getOneComment/:id', checkMongoId, (req, res) => {

    Comment
        .findById(req.params.id)
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
        .find({ imageId: req.params.image_id })
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

router.post('/addCommentToImage', async (req, res) => {
    const image = req.body

    const promiseArray = image.comments.map(comment => Comment.create(comment).then(savedComment => {
        console.log('commentId', savedComment._id)
        comment._id = savedComment._id
    }))
    await Promise.all(promiseArray).then(() => {
        image.comments = image.comments.map(comment => comment._id)
    })

    if (!image._id) {
        delete image._id
        Image
            .create(image)
            .then((savedImage) => {
                console.log('savedImage', savedImage)
                res.json(savedImage)
            })
    } else {
        Image.findByIdAndUpdate(image._id, image)
            .then(newImage => res.json(newImage))
    }
})


module.exports = router

