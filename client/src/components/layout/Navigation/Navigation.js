import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../../service/auth.service';


class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.loggedUser,
            value: ''
        };
        this.authService = new AuthService();
    }

    logOut() {
        this.authService
            .logOut()
            .then((res) => {
                this.props.storeUser(undefined);

                //this.props.history.push('/');
            })
            .catch((err) => console.log(err));
    }

    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onFormSubmit = (event) => {
        alert("e")
        event.preventDefault()
    }

    render() {

        return (
            <>
                <Navbar bg='light' expand='lg'>
                    <Navbar.Brand to='/' as={Link}>SplashGram</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link to="/" as={Link}>Inicio</Nav.Link>
                            
                            {this.props.loggedUser?
                             <>
                            <Nav.Item>
                               
                                <Nav.Link to='/myalbums' as={Link}>Mis álbumes</Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                               
                            <Nav.Link to='/users-images' as={Link}>Explorar</Nav.Link>

                        </Nav.Item>
                             </>

                            :
                            ''}
                            <NavDropdown
                                
                                title={this.props.loggedUser ? this.props.loggedUser.username : 'Invitado'}
                                id='basic-nav-dropdown'
                            >
                                <NavDropdown.Item>
                                    <Link to='/user-profile'>Perfil</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>this.logOut()}>
                                    Cerrar sesión
                                        </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {this.props.loggedUser?
                        <Nav.Link as="span" onClick={()=>this.logOut()}>Cerrar sesión</Nav.Link> 
                        
                        :
                        <Nav>
                            <Link to='/signup'>
                                <Nav.Link as='div'>Registro</Nav.Link>
                            </Link>
                            <Link to='/login'>
                                <Nav.Link as='div'>Inicio de sesión</Nav.Link>
                            </Link>

                        </Nav>}

                        {this.props.loggedUser ? (
                            <>
                            <Form inline onSubmit={e => this.onFormSubmit(e)}>
                                <FormControl
                                onSubmit={e => this.handleSubmit(e)}
                                    type='text'
                                    value={this.state.value}
                                    onChange={this.onInputChange}
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                {/*<Button onClick={ () =>this.props.history.push(`/?queryString=${ this.state.value }`)} variant='outline-success'>Search</Button>*/}
                            </Form>
                                <Link to={{
                                    pathname: "/",
                                    search: `?queryString=${this.state.value}`,
                                    state: { fromDashboard: true }
                                }}
                                >Búsqueda</Link>
                                </>
                        ) : (
                            ''
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Navigation;