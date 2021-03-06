import { Component } from 'react'
import AuthService from './LoginForm.js'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: ''
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
            .login(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => this.props.handleAlert(true, 'Error', err.response.data.message))
    }


    render() {
        return (
            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Iniciar sesión</h1>

                        <hr />

                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="lastname" value={this.state.lastname} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            <Button variant="dark" block type="submit">Acceder</Button>
                        </Form>

                    </Col>

                </Row>

            </Container>
        )
    }
}



export default Login