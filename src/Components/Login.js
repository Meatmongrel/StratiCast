import React, { Component } from 'react'

export default class Login extends Component {
    render() {

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
        .then(console.log)
    }
        return (
            <div>
                <form onSubmit={formHandler}>
                    <input type='text' placeholder='Username' name='username' />
                    <input type='password' placeholder='Password' name='password' />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
