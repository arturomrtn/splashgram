
import { Component } from 'react'
import AuthService from './../../service/auth.service'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
        }

        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.authService
            .register(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }


    render() {
        return (
            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Registro de usuario</h1>

                        <hr />

                        <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.firstname} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.lastname} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            <Button variant="dark" block type="submit">Register</Button>
                        </Form>

                    </Col>

                </Row>

            </Container>
        )
    }
}



export default Register