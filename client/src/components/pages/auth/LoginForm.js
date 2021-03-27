import { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
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
            .then(resp => {
                console.log( resp.data )
                this.props.storeUser(resp.data)
                this.props.history.push('/')
            })
            .catch(err => this.props.handleAlert(true, 'Error', err.response.data.message))
    }


    render() {
        return (
            <Container fluid>

                <Row>

                    <Col className="sign-up container align-items-center" md={{ span: 4, offset: 4 }}>

                        <h1>Inicio de sesión</h1>

                        <hr />

                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
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