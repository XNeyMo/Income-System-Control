import React, { useState } from 'react';
import '../../styles/forms.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form className='sl-form' onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoginComponent;
