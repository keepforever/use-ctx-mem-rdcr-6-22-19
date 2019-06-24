import React from 'react';
import styles from '../styles';
import { useForm } from '../hooks/useForm';

const UseEffectDemo = props => {
    const [values, handleChange] = useForm({ name: '', password: '' });
    return (
        <div style={styles['style-a']}>
            <h2>Hello UseEffectDemo</h2>
            <input
                name="name"
                type="text"
                placeholder="Enter name..."
                onChange={handleChange}
                value={values.name}
                style={styles['input']}
            />
            <input
                name="password"
                type="password"
                placeholder="Enter password..."
                onChange={handleChange}
                value={values.password}
                style={styles['input']}
            />
        </div>
    );
};

export default UseEffectDemo;
