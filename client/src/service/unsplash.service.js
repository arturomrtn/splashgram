import axios from 'axios'

class UnsplashService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://api.unsplash.com/`,
            headers: { 'Authorization': 'Client-ID ' + 'B7KLWsLBswM_z_TXitT3EeYnZ47Ub3l2Um_rx5rt7GI' }
        })
    }

    getRandomImages = ()=> {
            return new Promise(resolve => {
            this.api
            .get('photos/random?count=10')
            .then(resp =>{
                
                const linksArray = resp.data.map(image => {
                    return ({
                        link: image.urls.regular,
                        author: image.user.name,
                        description: image.description
                    })
                })
                resolve(linksArray)
            })
        })
    }
   
}

export default UnsplashService