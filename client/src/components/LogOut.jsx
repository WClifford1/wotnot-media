import React, { Component } from 'react'

export default class LogOut extends Component {

    logout() {
        localStorage.removeItem('token')
        window.location = '/'
    }

    render() {
        return (
            <button onClick={this.logout}>LOGOUT</button>
        )
    }
}
