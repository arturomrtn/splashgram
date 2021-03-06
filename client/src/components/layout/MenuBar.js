import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../service/auth.service';

class MenuBar extends Component {
	constructor(props) {
		super(props);
		this.authservice = new AuthService();
		this.state = {
			user: this.props.storeUser,
		};
	}

	logOut = () => {
		this.authservice
			.logout()
			.then((res) => {
				this.props.storeUser(undefined);

				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/'>SplashGram</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							{this.props.loggedUser ? (
								<>
									<Nav.Link href='/myalbums'>My Albums</Nav.Link>
									<NavDropdown
										title={this.state.user.username}
										id='basic-nav-dropdown'
									>
										<NavDropdown.Item href='#action/3.1'>
											<Link to='/mybio'>Bio</Link>
										</NavDropdown.Item>
										<NavDropdown.Item href='#action/3.3'>
											Profile
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								''
							)}
						</Nav>
						<Nav>
							{this.props.loggedUser ? (
								<>
									<Link to={`/profile`} className='profile-link'>
										<Nav.Link as='div'>
											{this.props.loggedUser.username}
										</Nav.Link>
									</Link>
									<Nav.Link as='div' onClick={this.logOut}>
										Salir
									</Nav.Link>
								</>
							) : (
								<>
									<Link to='/register'>
										<Nav.Link as='div'>Registro</Nav.Link>
									</Link>
									<Link to='/login'>
										<Nav.Link as='div'>Inicio de sesión</Nav.Link>
									</Link>
								</>
							)}
						</Nav>
						{this.props.loggedUser ? (
							<Form inline>
								<FormControl
									type='text'
									placeholder='Search'
									className='mr-sm-2'
								/>
								<Button variant='outline-success'>Search</Button>
							</Form>
						) : (
							''
						)}
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}

export default MenuBar;
