import React, { Component } from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap'
import AuthService from '../../../service/auth.service'

export default class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bio: this.props.loggedUser?.bio
        }

        this.authService = new AuthService()


    }

    editBio() {
        this.props.loggedUser.bio = this.state.bio

        this.authService
            .updateUser(this.props.loggedUser)
            .catch(error => console.error('No se ha guardado la bio'))
    }

    handleChange(event) {
        this.setState({
            bio: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Bienvenido a tu perfil {this.props.loggedUser?.username}</h1>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg" roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <h2>Mi biografía: </h2>
                <input value={this.state.bio} onChange={event => this.handleChange(event)} />
                <button onClick={() => this.editBio()}>Editar bio</button>
            </div>
        )
    }
}
