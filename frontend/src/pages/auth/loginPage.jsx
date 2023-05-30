import React from 'react';
import LoginComponent from '../../components/pure/login'
import '../../styles/allPages.css';

const LoginPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <i class="bi bi-person-fill"></i>
                <LoginComponent></LoginComponent>
            </div>
        </div>
    );
}

export default LoginPage;
