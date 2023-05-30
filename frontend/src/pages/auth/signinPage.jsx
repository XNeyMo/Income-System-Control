import React from 'react';
import SigninComponent from '../../components/pure/signin'
import '../../styles/allPages.css';

const SigninPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <i class="bi bi-people-fill"></i>
                <SigninComponent></SigninComponent>
            </div>
        </div>
    );
}

export default SigninPage;
