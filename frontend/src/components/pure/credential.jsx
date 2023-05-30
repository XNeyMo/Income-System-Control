import React, { useState } from 'react';
import '../../styles/forms.css';

const CredentialComponent = () => {
    const [fullName, setFullName] = useState('');
    const [personalID, setPersonalID] = useState('');
    const [showImage, setShowImage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes validar si el formulario fue enviado correctamente
        // Si es así, actualiza el estado de showImage a true
        setShowImage(true);
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

            {showImage && (
                <img style={{ marginTop: '5%' }} class="img-info" src="https://th.bing.com/th/id/OIP.qHRrge25gpFW2Kthj4Qs2AHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7" alt="" />
            )}
        </div>
    );
}

export default CredentialComponent;