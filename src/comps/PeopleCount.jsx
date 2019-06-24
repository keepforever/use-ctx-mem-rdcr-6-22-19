import React, { useContext, useRef } from 'react';
import PeopleContext from '../context/peopleContext';

const PeopleCount = () => {
    // const renders = useRef(0);
    // console.log('PeopleCount render count = ', ++renders.current, '\n');
    const context = useContext(PeopleContext);
    return (
        <div
            style={{
                border: '2px solid white',
                display: 'flex',
                flexDirection: 'column',
                margin: '30px',
                padding: '20px'
            }}
        >
            <h3>PeopleCount = {context.people.length}</h3>
        </div>
    );
};

export default PeopleCount;
