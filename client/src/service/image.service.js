import axios from 'axios'

class ImageService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/image`,
            withCredentials: true
        })
    }

    getAllImages = () => this.api.get('/getAllImages')
    getOneImage = imageId => this.api.get(`/getOneImage/${imageId}`)
    createImage = imageDetails => this.api.post('/newImage', imageDetails)
    editImage = (imageId, imageDetails) => this.api.put(`/editImage/${imageId}`, imageDetails)
    deleteImage = (imageId) => this.api.delete(`/deleteOneImage/${imageId}`)
}

export default ImageService