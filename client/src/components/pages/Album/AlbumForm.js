import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import './AlbumForm.css'

class AlbumForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            description: '',


        }
        this.albumService = new AlbumService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    createNewAlbum() {
        this.albumService.createAlbum({
            userId: this.props.loggedUser._id,
            //|| '604378e1b1e00ba51c9408d1',
            ...this.state
        }).then(() => {
            alert('Se ha creado un nuevo álbum')
            const { onNewAlbum } = this.props
            if (onNewAlbum) onNewAlbum()
        })

    }

    render() {
        return (
            <div className="album-form">
                <label>Nombre:</label>
                <input name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                <label>Descripción:</label>
                <input name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                <button onClick={() => this.createNewAlbum()}>Crear álbum</button>
            </div>
        )
    }
}

export default AlbumForm
