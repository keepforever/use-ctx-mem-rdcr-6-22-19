import React, { useState, useContext, useRef, useMemo } from 'react';
import PeopleContext from '../context/peopleContext';

const Form = () => {
    const renders = useRef(0);
    console.log('Form render count = ', ++renders.current, '\n');

    const [person, setPerson] = useState({ name: '' });
    const context = useContext(PeopleContext);

    const onChange = event => {
        setPerson({ [event.target.name]: event.target.value });
    };

    const submitPerson = () => {
        if (!person.name.length) return;
        context.addPerson(person);
        setPerson({ name: '' });
    };

    const printNumberOfPeople = () => {
        console.warn(`${context.people.length} number of People`);
    };

    useMemo(
        () => {
            printNumberOfPeople();
        },
        [context.people]
    );

    return (
        <div
            style={{
                border: '1px solid blue',
                display: 'flex',
                flexDirection: 'column',
                margin: '20px',
                padding: '10px',
                alignItems: 'center'
            }}
        >
            <p>hello form</p>
            <input
                type="text"
                name="name"
                placeholder="Enter name..."
                value={person.name}
                onChange={onChange}
                style={{
                    height: 30,
                    width: 300,
                    fontSize: 20
                }}
            />
            <button
                style={{
                    height: 70,
                    width: 300,
                    fontSize: 20
                }}
                onClick={submitPerson}
            >
                Submit Person
            </button>
        </div>
    );
};

export default Form;
