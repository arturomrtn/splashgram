import axios from 'axios'

class AlbumService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/album`,
        })
    }

    //crear metodo de getAlbumByOwner
    getAllAlbums = () => this.api.get('/getAllAlbums')
    getOneAlbum = albumId => this.api.get(`/getOneAlbum/${albumId}`)
    getAlbumsByOwner = userId => this.api.get(`/getAlbumsByOwner/${userId}`)
    createAlbum = albumDetails => this.api.post('/newAlbum', albumDetails)
    editAlbum = (albumId, albumDetails) => this.api.put(`/editAlbum/${albumId}`, albumDetails)
    deleteAlbum = (albumId) => this.api.delete(`/deleteAlbum/${albumId}`)
}

export default AlbumService