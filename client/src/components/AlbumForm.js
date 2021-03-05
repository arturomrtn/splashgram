import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Album extends Component {
    constructor(props) {
        super(props)

        this.state = {
                userID: this.props.loggedUser ? this.props.loggedUser._id : '',
                name: '',
                description: '',
                images: []
    

        }
        this.albumService = new AlbumService()


    }

    handleSubmit = e => {
        e.preventDefault()

        this.albumService
            
    }
  
    render() {

        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a name for the album" />
                <Form.Text className="text-muted">
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>


    }
}


export default Album

