import React, { Component } from 'react'
import { register } from './UserService'
import axios from 'axios'

export default class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    this.state = {
        account: {
            name: '',
            password: ''
        }
    }
}
    
    onChange = e => {
        const account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({ account })
    }
    
    onSubmit = e => {
        e.preventDefault()
        // Call the server
        const newUser = {
            name: this.state.account.name,
            password: this.state.account.password
        }
        
        axios.post('http://localhost:4000/api/users', newUser)
            .then(res => console.log(res.data))
        
        this.setState({
            account: {
            name: '',
            password: ''
            }
        })
    }




    render() {
        

        return (
            <div>
                <h1>Register</h1>    
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input name="name" onChange={this.onChange} autoFocus value={this.state.account.name} type="text" />
                
                    <label>Password</label>
                    <input value={this.state.account.password} onChange={this.onChange} name="password" type="password" />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}