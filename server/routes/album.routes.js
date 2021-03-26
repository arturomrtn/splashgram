const express = require("express")
const router = express.Router()
const Album = require("../models/Album.model")
const Image = require("../models/Image.model")


router.post('/newAlbum', (req, res) => {
   const album = { ...req.body }

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

    Album
        .findByIdAndUpdate(req.params.album_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing album', err }))

})

router.put('/addImageToAlbum/:album_id', (req, res) => {

    const { albumDetails, image } = req.body

    let updatePromise = new Promise( resolve => {

        if ( !image._id ) {
            delete image._id
            Image.create(image).then((newImage) => {
               
                const updatedAlbum = replaceUndefinedImageId( newImage._id, albumDetails )

                updateAlbum( updatedAlbum, newImage._id ).then( album => resolve (album))
            }).catch(err => console.log(err, "falla img"))
        }    
        else {
            updateAlbum( albumDetails, image._id ).then( album => resolve( album ))
        }
    })

    updatePromise.then(response => res.json(response))
                .catch(err => console.log(err => "falla actualizar album"))
                .catch(err => res.status(500).json({ code: 500, message: 'Error adding image to album', err }))

})

function replaceUndefinedImageId( newId, album ) {
    const nullIdImage = album.images.find( image => !image._id )
    nullIdImage._id = newId

    return album
}

function updateAlbum( album, newImageId ) {
    return Album.findByIdAndUpdate(
        album._id,
        { $push: { images: newImageId } }
    )
}

router.delete('/deleteAlbum/:album_id', (req, res) => {

    Album
        .findByIdAndRemove(req.params.album_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting album', err }))
})


module.exports = router