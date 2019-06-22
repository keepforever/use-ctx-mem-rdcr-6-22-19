import React, { useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const PeopleCount = () => {
    const context = useContext(PeopleContext);
    return (
        <div>
            <h3>Count = {context.people.length}</h3>
        </div>
    );
};

export default PeopleCount;
