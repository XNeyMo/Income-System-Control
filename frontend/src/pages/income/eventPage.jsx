import React from 'react';
import EventComponent from '../../components/pure/event'
import '../../styles/allPages.css';

const EventPage = () => {
    return (
        <div className='left'>
            <div className="container">
                <h1 className='title'>EVENT DATA</h1>

                <EventComponent></EventComponent>
            </div>
        </div>
    );
}

export default EventPage;
