import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../../service/auth.service';


class Navigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: this.props.storeUser,
			value: ''
		};
		this.authservice = new AuthService();
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

	onInputChange = (event) => {
		this.setState({ value: event.target.value })
	}

	onFormSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/'>SplashGram</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link to="/" as={Link}>Home</Nav.Link>
							<Nav.Item>

								<Nav.Link to='/myalbums' as={Link}>My Albums</Nav.Link>
							</Nav.Item>
							<NavDropdown
								title={this.props.storeUser ? 'Username' : 'User'}
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
						</Nav>
						<Nav>
							<Link to='/register'>
								<Nav.Link as='div'>Registro</Nav.Link>
							</Link>
							<Link to='/login'>
								<Nav.Link as='div'>Inicio de sesión</Nav.Link>
							</Link>

						</Nav>
						{this.props.storeUser ? (
							<Form inline onSubmit={e => this.handleSubmit(e)}>
								<FormControl
									type='text'
									value={this.state.value}
									onChange={this.onInputChange}
									placeholder='Search'
									className='mr-sm-2'
								/>
								{/*<Button onClick={ () =>this.props.history.push(`/?queryString=${ this.state.value }`)} variant='outline-success'>Search</Button>*/}
								<Link to={{
									pathname: "/",
									search: `?queryString=${this.state.value}`,
									state: { fromDashboard: true }
								}}
								>Search</Link>
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

export default Navigation;
