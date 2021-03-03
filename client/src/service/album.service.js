import axios from 'axios'

class AlbumService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/album`,
            withCredentials: true
        })
    }

    getAllAlbums = () => this.api.get('/getAllAlbums')
    getOneAlbum = albumId => this.api.get(`/getOneAlbum/${albumId}`)
    createAlbum = albumDetails => this.api.post('/newAlbum', albumDetails)
    editAlbum = (albumId, albumDetails) => this.api.put(`/editAlbum/${albumId}`, albumDetails)
    deleteAlbum = (albumId) => this.api.delete(`/deleteOneAlbum/${albumId}`)
}

export default AlbumService