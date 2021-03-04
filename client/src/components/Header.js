import { Navbar, Nav } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthServices from '../service/auth.service'


class Header extends Component {
    constructor(props) {
        super(props)
        this.authservice = new AuthServices()
    }

    logOut = () => {
        this.authservice
            .logout()
            .then(res => {
                this.props.storeUser(undefined)

                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar className='navbar' >
                <Link to='/' className='brand'>
                    <Navbar.Brand ><span className='page-title'>SplashGram</span></Navbar.Brand>
                </Link>
                <Nav className="mr-auto">

                </Nav>
                <Nav className="mf-auto">
                    {this.props.loggedUser
                        ?
                        <>
                            <Link to={`/profile`} className='profile-link'>
                                <Nav.Link as='div'>{this.props.loggedUser.username}</Nav.Link>
                            </Link>
                            <Nav.Link as='div' onClick={this.logOut}>Salir</Nav.Link>
                        </>
                        :
                        <>
                            <Link to='/register'>
                                <Nav.Link as='div'>Registro</Nav.Link>
                            </Link>
                            <Link to='/login'>
                                <Nav.Link as='div'>Inicio de sesión</Nav.Link>
                            </Link>
                        </>
                    }




                </Nav>
            </Navbar>
        )
    }

}

export default Header

