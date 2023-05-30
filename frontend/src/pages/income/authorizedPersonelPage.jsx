import React from 'react';
import AuthorizedPersonnelComponent from '../../components/pure/authorizedPersonnel'
import '../../styles/allPages.css';

const AuthorizedPersonnelPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <h1 className='title'>AUTHORIZED PERSONNEL DATA</h1>
            
                <AuthorizedPersonnelComponent></AuthorizedPersonnelComponent>
            </div>
        </div>
    );
}

export default AuthorizedPersonnelPage;
