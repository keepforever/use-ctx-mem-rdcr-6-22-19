import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';

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

    // WITHOUT INITIALIZER FUNCTION
    // const [randomTodo, setRandomTodo] = useState(
    //     // first look in localStorage for value of randomTodo, if it's not there instantiate a random value.
    //     // we add JSON.parse() so it works for various types of stored data
    //     JSON.parse(localStorage.getItem('randomTodo')) ||
    //         parseInt(Math.floor(Math.random() * 100))
    // );

    // WITH INITIALIZER FUNCTION
    const [randomTodo, setRandomTodo] = useState(
        () =>
            // first look in localStorage for value of randomTodo, if it's not there instantiate a random value.
            // we add JSON.parse() so it works for various types of stored data
            JSON.parse(localStorage.getItem('randomTodo')) ||
            parseInt(Math.floor(Math.random() * 100))
    );

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
    const [xMouseVal, setXMouseVal] = useState(0);
    const [yMouseVal, setYMouseVal] = useState(0);
    // mouseMove event listener, more practical application.
    // useEffect(() => {
    //     const onMouseMove = e => {
    //         setXMouseVal(e.layerX);
    //         setYMouseVal(e.layerY);
    //     };
    //     window.addEventListener('mousemove', onMouseMove);
    //
    //     return () => {
    //         console.log('UseEffectDemo cleanup');
    //         window.removeEventListener('mousemove', onMouseMove);
    //         setXMouseVal(0);
    //         setYMouseVal(0);
    //     };
    // }, [values.name]);

    // ## FOUR ## //
    // const [fetchData, setFetchData] = useState({});
    // You can have more than one useEffect. They fire off in sequential order.
    // useEffect(
    //     () => {
    //         console.log('\n', `useEffect ONE `, '\n');
    //
    //         return () => {
    //             console.log('\n', `cleanup useEffect ONE `, '\n');
    //         };
    //     },
    //     [values.name]
    // );
    // useEffect(
    //     () => {
    //         console.log('\n', `useEffect TWO `, '\n');
    //
    //         return () => {
    //             console.log('\n', `cleanup useEffect TWO `, '\n');
    //         };
    //     },
    //     [values.name]
    // );
    // ## FOUR ## //
    // Fetch from an api. Cannot pass async func to a useEffect, so, either
    // instantiate an async function inside the callback passed to use effect or
    // use .then() syntax to handle promise.  We can turn this into a custom
    // useFetch hook.
    // useEffect(() => {
    //     const randomTodo = parseInt(Math.floor(Math.random() * 100));
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/todos/' + randomTodo)
    //         .then(res => {
    //             console.log('\n', '\n', `res = `, res, '\n', '\n');
    //             setFetchData({ data: res.data });
    //         });
    // }, [values.name]);

    // ## FIVE ## //
    // calling the custom hook
    const { data, loading } = useFetch(randomTodo);
    console.log('\n', '\n', `data = `, data, '\n', '\n');
    console.log('\n', '\n', `loading = `, loading, '\n', '\n');

    // ## SIX ## //
    // persist the value of randomTodo to localStorage
    useEffect(
        () => {
            localStorage.setItem('randomTodo', JSON.stringify(randomTodo));
        },
        [randomTodo]
    );

    return (
        <div style={styles['style-a']}>
            <h2>Hello UseEffectDemo</h2>
            <h4 style={{ margin: 0 }}>Mouse Position</h4>
            <div style={styles['flex-row']}>
                <p style={{ marginRight: 20 }}>X: {xMouseVal}</p>
                <p>Y: {yMouseVal}</p>
            </div>
            <h4 style={{ margin: 0 }}>Fetch Data</h4>
            {/* {fetchData.data ? (
                <div style={styles['flex-row']}>
                    <p style={{ marginRight: 20 }}>
                        user: {fetchData.data.userId}
                    </p>
                    <p>ID: {fetchData.data.id}</p>
                </div>
            ) : (
                <p>No data fetched yet</p>
            )} */}
            {!loading && <p>{JSON.stringify(data)}</p>}
            <button
                onClick={() => {
                    const newRandomTodo = parseInt(
                        Math.floor(Math.random() * 100)
                    );
                    setRandomTodo(newRandomTodo);
                }}
            >
                New Random Todo
            </button>

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
                type="text"
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
