import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import { Button, Card } from 'react-bootstrap';


class Album extends Component {
    constructor() {
        super()

        this.state = {
            albums: [],
            //user: this.props.storeUser
        }

        this.albumService = new AlbumService()
    }

//checkout
    componentDidMount() {

            this.albumService
            .getAllAlbums()
            .then(response => this.setState({ albums: response.data }))
            .catch(err => console.log(err))
    }
    

    render() {
        
        const { albums } = this.state
        console.log(albums)


        return (
            <div>
                <h1>Mis albums</h1>
                {
                    albums.map(album => (
                        <Card style={{ width: '18rem' }} key={album._id}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{album.name}</Card.Title>
                                <Card.Text>
                                    {album.description}
                                </Card.Text>
                                <Button variant="primary">Abrir album</Button>
                            </Card.Body>
                        </Card>
                    ))
                    }
            </div>
        )
    }
}

export default Album