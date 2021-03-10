import axios from 'axios'

class UnsplashService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://api.unsplash.com/`,
            headers: { 'Authorization': 'Client-ID ' + 'API KEY' }
        })
    }

    getRandomImages = () => {
        return  this.api
                .get('photos/random?count=10')
                .then(resp => {

                    const linksArray = resp.data.map(image => {
                        return ({
                            link: image.urls.regular,
                            author: image.user.name,
                            description: image.description
                        })
                    })
                    return linksArray
                })
       
    }

    searchImages = ( query ) => {
        return new Promise(resolve => {
            this.api
                .get('search/photos?query='+query)
                .then(resp => {
                    console.log(resp.data)
                    const linksArray = resp.data.results.map(image => {
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