import React from 'react'
import { Card, Button } from 'react-bootstrap'

 const AlbumCard = ({name, description, _id}) => {


        return (

                        <Card style={{ width: '18rem' }} key={_id}>
                            <Card.Img src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Button variant="primary">Abrir álbum</Button>
                            </Card.Body>
                        </Card>
                    
            
        )

 }
        
export default AlbumCard
