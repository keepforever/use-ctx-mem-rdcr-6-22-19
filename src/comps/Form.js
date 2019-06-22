import React, { useState, useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const Form = () => {
    const [person, setPerson] = useState({ name: '' });
    const context = useContext(PeopleContext);

    const onChange = event => {
        setPerson({ [event.target.name]: event.target.value });
    };

    const submitPerson = () => {
        context.addPerson(person);
        setPerson({ name: '' });
    };

    return (
        <div>
            <p>hello form</p>
            <input
                type="text"
                name="name"
                placeholder="Enter name..."
                value={person.name}
                onChange={onChange}
            />
            <button onClick={submitPerson}>Submit Person</button>
        </div>
    );
};

export default Form;
