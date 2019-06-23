import React, { useContext, useRef } from 'react';
import {useForm} from '../hooks/useFormQuestion';
import PeopleContext from '../context/peopleContext';
// styles
import styles from '../styles';

const Form = () => {
    const renders = useRef(0);
    console.log('Form render count = ', ++renders.current, '\n');

    const [values, handleChange, clearForm, getStuff] = useForm({ name: '' });
    const context = useContext(PeopleContext);

    const submitPerson = async () => {
        console.log('\n', '\n', `values.name = `, values.name, '\n', '\n');
        if (!values.name.length) return;
        context.addPerson({name: values.name});
        clearForm();
        await getStuff();
    };

    return (
        <div
            style={styles['style-a']}
        >
            <p>hello form</p>
            <input
                type="text"
                name="name"
                placeholder="Enter name..."
                value={values.name || ''}
                onChange={handleChange}
                style={styles['input']}
            />
            <button
                style={styles['input']}
                onClick={submitPerson}
            >
                Submit Person
            </button>
            {values.data && <div style={{
                border: '2px solid green'
            }}>
                <h2>
                    {values.data.title}
                </h2>
            </div>}
        </div>
    );
};

export default Form;
