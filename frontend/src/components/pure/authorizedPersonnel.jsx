import React, { useState } from 'react';
import '../../styles/forms.css';

const AuthorizedPersonnelComponent = () => {
    // Person Data
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [personalID, setPersonalID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío de ambos formularios
    }

    return (
        <form className='va-form' onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={event => setFullName(event.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
            </label>
            <br />
            <label>
                Personal ID:
                <input type="text" value={personalID} onChange={event => setPersonalID(event.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    );
}

export default AuthorizedPersonnelComponent;
