import React from 'react';
import VisitorComponent from '../../components/pure/visitor'
import '../../styles/allPages.css';

const VisitorPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <h1 className='title'>VISITOR DATA</h1>

                <VisitorComponent></VisitorComponent>
            </div>
        </div>
    );
}

export default VisitorPage;
