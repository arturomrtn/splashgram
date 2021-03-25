import React, { Component } from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap'

export default class UserProfile extends Component {
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
                <h2>Mi biografía: {this.props.loggedUser?.bio}</h2>
            </div>
        )
    }
}
