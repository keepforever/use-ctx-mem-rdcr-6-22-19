import React, { useState, useContext, useRef, useMemo, useCallback } from 'react';
import {useForm} from '../hooks/useForm'
import PeopleContext from '../context/peopleContext';

const Form = () => {
    const renders = useRef(0);
    console.log('Form render count = ', ++renders.current, '\n');

    const nameRef = useRef('');
    console.log('\n', '\n', `nameRef = `, nameRef, '\n', '\n');
    console.log('\n', '\n', `nameRef.current.value = `, nameRef.current.value, '\n', '\n');

    const [values, handleChange, clearForm] = useForm({ name: '' });
    const context = useContext(PeopleContext);

    const submitPerson = () => {
        console.log('\n', '\n', `values.name = `, values.name, '\n', '\n');
        if (!values.name.length) return;
        context.addPerson({name: values.name});
        clearForm()
    };

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
                ref={nameRef}
                placeholder="Enter name..."
                value={values.name}
                onChange={handleChange}
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
