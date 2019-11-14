import React from 'react'

export default function Registration(props) {

    const formHandler = event => {
        event.preventDefault();
        const formData = new FormData(event.target)
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get('username'),
                name: formData.get('name'),
                location: formData.get('location'),
                password: formData.get('password'),
            })
        })
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type='text' placeholder='First Name' name='name' />
                <input type='text' placeholder='City' name='location' />
                <input type='text' placeholder='Username' name='username' />
                <input type='password' placeholder='Password' name='password' />
                <button>Register User</button>
            </form>
        </div>
    )
}
