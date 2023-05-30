import React, { useState } from 'react';
import QRious from 'qrious';
import '../../styles/forms.css';

const AuthorizedPersonnelComponent = () => {
    // Person Data
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [personalID, setPersonalID] = useState('');

    const handleSubmit = async (event) => {
        // Create temporary canvas
        const canvas = document.createElement('canvas');
        new QRious({
            element: canvas,
            value: personalID
        });
        // Get QR code as base64 image
        const qrCodeImage = canvas.toDataURL();

        event.preventDefault();
        const response = await fetch('http://localhost:8000/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                phone,
                personalID,
                qrCodeImage
            })
        });
        const data = await response.json();
        console.log(data);
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
