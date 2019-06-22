import React, { useState } from 'react';

const Form = props => {
    const [person, setPerson] = useState({ name: '' });

    const onChange = event => {
        setPerson({ [event.target.name]: event.target.value });
    };

    const submitPerson = () => {
        props.addPerson(person);
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
