import React, { Component } from 'react'
//import { Dropdown } from 'react-bootstrap'
import AlbumService from '../../../service/album.service'

class ImageDetails extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            image: null,
            selectedAlbum: ""
        
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

        this.albumService
            
            .getAlbumsByOwner('604378e1b1e00ba51c9408d1')
            .then(response => {
                this.setState({ albums: response.data })
            })
            .catch(err => console.log(err))
    }

    handleSelectChange(event) {
        this.setState ({selectedAlbum: event.target.value})
    }

    handleAddToAlbum() {
        
        
        //this.albumService.editAlbum(this.state.selectedAlbum._id)
    }

    render() {
        const { location } = this.props
        const { albums, selectedAlbum } = this.state
        const params = new URLSearchParams(location.search)

        return (
            <div>

                <img src={params.get('link')} width="100%" />
                <p>{params.get('description')}</p>
                <p>{params.get('author')}</p>
                <select name="selectedAlbum"  onChange={event => this.handleSelectChange(event)}>
                    {albums?.map(elm => <option key={elm.name} value={elm}>{elm.name}</option>)}
                </select>
                <button onClick={ () => this.handleAddToAlbum()}>Add to album</button>
            </div>
        )
    }
}

export default ImageDetails

