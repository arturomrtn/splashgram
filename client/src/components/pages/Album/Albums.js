import React, { Component } from 'react'
import Album from './Album'

export default class Albums extends Component {
    render() {
        return (
            <div>
                <h1>My Albums</h1>
                <Album />
            </div>
        )
    }
}
