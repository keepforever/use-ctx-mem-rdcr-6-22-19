import React, { useEffect, useState } from 'react';
import styles from '../styles';
import { useForm } from '../hooks/useForm';

const UseEffectDemo = props => {
    const [values, handleChange, clearForm] = useForm({
        name: '',
        password: ''
    });

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            clearForm();
        }
    };

    const [xMouseVal, setXMouseVal] = useState(0);
    const [yMouseVal, setYMouseVal] = useState(0);

    // NOTE: Passing [] to the dependency array simulates componentDidMount()
    // from classed based components because it will only run on the first mount.

    // ## ONE ## //
    // useEffect(
    //     () => {
    //         console.log('\n', `UseEffectDemo, useEffectOne ran   `, '\n');
    //         return () => {
    //             console.log('UseEffectDemo cleanup');
    //         };
    //     },
    //     // only rerun this useEffect when values.password changes.
    //     [values.password]
    // );

    // ## TWO ## //
    // useEffect(
    //     () => {
    //         console.log('\n', `UseEffectDemo, useEffectOne ran   `, '\n');
    //         return () => {
    //             console.log('UseEffectDemo cleanup');
    //         };
    //     },
    //     // only rerun this useEffect when values.password changes.
    //     [values.password]
    // );

    // ## THREE ## //
    // mouseMove event listener, more practical application.
    useEffect(() => {
        const onMouseMove = e => {
            setXMouseVal(e.layerX);
            setYMouseVal(e.layerY);
        };
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            console.log('UseEffectDemo cleanup');
            window.removeEventListener('mousemove', onMouseMove);
            setXMouseVal(0);
            setYMouseVal(0);
        };
    }, [values.name]);

    return (
        <div style={styles['style-a']}>
            <h2>Hello UseEffectDemo</h2>
            <div style={styles['flex-row']}>
                <p>X: {xMouseVal}</p>
                <p>Y: {yMouseVal}</p>
            </div>
            <input
                name="name"
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Enter name..."
                onChange={handleChange}
                value={values.name}
                style={styles['input']}
            />
            <input
                name="password"
                type="password"
                onKeyDown={handleKeyDown}
                placeholder="Enter password..."
                onChange={handleChange}
                value={values.password}
                style={styles['input']}
            />
        </div>
    );
};

export default UseEffectDemo;
