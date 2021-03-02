const express = require("express")
const router = express.Router()
const Album = require("../models/Album.model")


router.post('/newAlbum', (req, res) => {
    console.log(req.body)

    const album  = { ...req.body }

    Album
    .create(album)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error saving coasters', err }))
})


router.get('/getOneAlbum/:album_id', (req, res) => {

    Album
        .findById(req.params.album_id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching album', err }))
})


router.get('/getAllAlbums', (req, res) => {

    Album
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching albums', err }))
})


router.put('/editAlbum/:album_id', (req, res) => {

    Album
        .findByIdAndUpdate(req.params.album_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing album', err }))

})


router.delete('/deleteAlbum/:album_id', (req, res) => {

    Album
        .findByIdAndRemove(req.params.album_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting album', err }))
})



module.exports = router