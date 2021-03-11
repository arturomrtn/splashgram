import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 const AlbumCard = ({name, description, _id}) => {


        return (

                        <Card style={{ width: '18rem' }} key={_id}>
                            <Card.Img src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Link to={`myalbums-content/?id=${_id}`} variant="primary">Abrir álbum</Link>
                            </Card.Body>
                        </Card>
                    
            
        )

 }
        
export default AlbumCard
