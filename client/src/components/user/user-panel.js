import React, { Component } from 'react'
import AuthService from '../../service/auth.service'
import { Form } from 'react-bootstrap'

export class UserPanel extends Component {

    constructor(props) {
        super(props)    
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            password: ""
        }
    }

    registerUser(event) {
        event.preventDefault()

    
        const auth = new AuthService()
        auth.register(this.state).then( ()=>
            this.props.storeUser(this.state)
        )
    }

    render() {
        const { username, firstname, lastname, password} = this.state

        return (
            <div className="register-panel">
                <form onSubmit={params => this.registerUser(params) }>
                    <input placeholder="Usuario" value={username} onChange={ event => this.setState({ username: event.target.value })}
                    />
                    <input placeholder="Contraseña" value={password} onChange={ event => this.setState({ password: event.target.value })} type="password"
                    />
                    <input
                        placeholder="Apellido" value={lastname} onChange={ event => this.setState({ lastname: event.target.value })}
                    />
                    <input placeholder="Nombre" value={firstname} onChange={ event => this.setState({ firstname: event.target.value })}
                    />
                    <button type = "submit">Registrarse</button>

                </form>
            </div>
        )
    }
}