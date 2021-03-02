const express = require("express")
const router = express.Router()
const Image = require("../models/Image.model")

router.post('/newImage', (req, res) => {
    console.log(req.body)

    Image.create({
        link: req.body.link,
        author: req.body.author,
        date: new Date(Date.now),
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving image', err }))
})


router.get('/getOneImage/:image_id', (req, res) => {

    Image
        .findById(req.params.image_id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching image', err }))
})

router.get('/getAllImages', (req, res) => {

    Image
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching images', err }))
})

router.put('/editImage/:image_id', (req, res) => {

    Image
        .findByIdAndUpdate(req.params.image_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing image', err }))

})

router.delete('/deleteImage/:image_id', (req, res) => {

    Image
        .findByIdAndRemove()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting image', err }))
})

module.exports = router