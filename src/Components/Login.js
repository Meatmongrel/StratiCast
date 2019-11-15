import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    render() {

    const { login } = this.props

    const formHandler = event => {
        event.preventDefault();
        const formData = new FormData(event.target)
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
            })
        }).then(res => res.json())
        .then(res => login(res))
        event.target.value = ""
    }
        return (
            <div>
                <form id='login-form' onSubmit={formHandler}>
                    <input type='text' placeholder='Username' name='username' />
                    <input type='password' placeholder='Password' name='password' />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
