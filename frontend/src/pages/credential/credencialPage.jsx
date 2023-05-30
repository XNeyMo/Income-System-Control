import React from 'react';
import CredentialComponent from '../../components/pure/credential';
import '../../styles/allPages.css';

const CredencialPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <h1 className='title'>PERSON'S CREDENTIAL</h1>

                <CredentialComponent></CredentialComponent>
            </div>
        </div>
    );
}

export default CredencialPage;
