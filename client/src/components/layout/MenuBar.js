import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
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

	logOut() {
		this.authservice
			.logout()
			.then((res) => {
				this.props.storeUser(undefined);

				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/'>SplashGram</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							{this.state.user ? (
								<>
									<Nav.Link href='/myalbums'>My Albums</Nav.Link>
									<NavDropdown
										title={this.state.user.username}
										id='basic-nav-dropdown'
									>
										<NavDropdown.Item>
											<Link to='/mybio'>Bio</Link>
										</NavDropdown.Item>
										<NavDropdown.Item>
											<Link to='/mybio'>Profile</Link>
										</NavDropdown.Item>
										<NavDropdown.Item onClick={this.logOut}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								''
							)}
						</Nav>
						<Nav>
							{this.props.storeUser ? (
								''
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
						{this.props.storeUser ? (
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
