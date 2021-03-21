const express = require("express")
const router = express.Router()
const Album = require("../models/Album.model")
const Image = require("../models/Image.model")


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
        .findById(req.params.album_id).populate('images')
        .then(response => {

            res.json(response)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching album', err }))
})


router.get('/getAlbumsByOwner/:user_id', (req, res) => {

    console.log( '---------', req.params )

    Album
        .find({ userId: req.params.user_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getAllAlbums', (req, res) => {

    Album
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching albums', err }))
})


router.put('/editAlbum/:album_id', (req, res) => {
    console.log(req.body, req.params)

    //Image.create()
    //usar el id para editar el album
    Album
        .findByIdAndUpdate(req.params.album_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing album', err }))

})

router.put('/addImageToAlbum/:album_id', (req, res) => {
    console.log(req.params.album_id, req.body.albumDetails, req.body.image)

    Image.create(req.body.image).then((newImage)=>{   
        
        const idToPush = newImage._id

     
        Album.findByIdAndUpdate(
            req.params.album_id, 
            { $push: { images: newImage._id } }

        )
        .then(response => res.json(response))
        .catch(err => console.log(err => "falla actualizar album"))
        .catch(err => res.status(500).json({ code: 500, message: 'Error adding image to album', err }))
    }).catch(err => console.log(err, "falla img"))
   

 
})

router.delete('/deleteAlbum/:album_id', (req, res) => {

    Album
        .findByIdAndRemove(req.params.album_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting album', err }))
})


module.exports = router