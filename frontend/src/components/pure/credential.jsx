import React, { useState } from 'react';
import '../../styles/forms.css';

const CredentialComponent = () => {
    const [fullName, setFullName] = useState('');
    const [personalID, setPersonalID] = useState('');
    const [qrCodeImage, setQrCodeImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:8000/people/${personalID}`);
        const data = await response.json();
        setQrCodeImage(data.qrCodeImage);
    }

    return (
        <div>
            <form className='c-form' onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={event => setFullName(event.target.value)} />
                </label>
                <br />
                <label>
                    Personal ID:
                    <input type="text" value={personalID} onChange={event => setPersonalID(event.target.value)} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br /><br /><br />
            {qrCodeImage && <img src={qrCodeImage} alt="QR Code" width={150} height={150}/>}
        </div>
    );
}

export default CredentialComponent;