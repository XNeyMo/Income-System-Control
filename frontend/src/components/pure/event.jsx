import React, { useState } from 'react';

const EventComponent = () => {
    // Event Data
    const [eventID, setEventID] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [exitTime, setExitTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventID,
                entryTime,
                exitTime,
                date
            })
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <form className='va-form' onSubmit={handleSubmit}>
            <label>
                Event ID:
                <input type="text" value={eventID} onChange={event => setEventID(event.target.value)} />
            </label>
            <br />
            <label>
                Entry Time:
                <input type="time" value={entryTime} onChange={event => setEntryTime(event.target.value)} />
            </label>
            <br />
            <label>
                Exit Time:
                <input type="time" value={exitTime} onChange={event => setExitTime(event.target.value)} />
            </label>
            <br />
            <label>
                Date:
                <input type="date" value={date} onChange={event => setDate(event.target.value)} />
            </label>
            <br />

            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    );
}

export default EventComponent;
