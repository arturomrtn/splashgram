import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhotoAlbum from '../../../images/photoalbum.png'
import './AlbumCard.css'


const AlbumCard = ({ name, description, _id, deleteAlbum }) => {

    return (

        <Card className="album-card" style={{ width: '18rem' }} key={_id}>
            <Card.Img src={PhotoAlbum} />
            <Card.Body>
                <Card.Title className="album-card-title">{name}</Card.Title>
                <Card.Text className="album-card-description">
                    {description}
                </Card.Text>
                <Link to={`myalbums-content/?id=${_id}`} variant="primary">Abrir álbum</Link>
                <Button onClick={() => deleteAlbum(_id)} className="btn btn-info">Borrar álbum</Button>
            </Card.Body>
        </Card>


    )

}

export default AlbumCard
