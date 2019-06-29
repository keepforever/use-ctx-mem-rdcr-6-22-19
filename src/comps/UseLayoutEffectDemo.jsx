import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useMeasureOne, useMeasureTwo } from '../hooks/useMeasure';

import styles from '../styles';
// useLayoutEffect is nearly identical to useEffect EXCEPT it fires synchronously
// after all DOM mutations.

// Good for measuring the width of a DOM component after a render occurs.
// Or, generally, any time we want to rely on information from the DOM.

// Example 1, measure dimentions of input field.

const UseLayoutEffectDemo = props => {
    const [value, setValue] = useState('inital value');
    const [rect, setRect] = useState({});

    const inputRef = useRef();
    const divRef = useRef();
    const divRefTwo = useRef();

    const [randomTodo, setRandomTodo] = useState(
        Math.floor(Math.random() * 100)
    );
    const { data } = useFetch(randomTodo);

    // ## ONE ##
    // useLayoutEffect(() => {
    //     console.log(`
    //     #########################################################
    //                     UseLayoutEffectDemo
    //     #########################################################
    //     `);
    //     console.log('\n', '\n', `inputRef.current.getBoundingClientRect() = `, inputRef.current.getBoundingClientRect(), '\n', '\n');
    //     console.log(`
    //     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //     #########################################################
    //     `);
    // }, []);

    // ## TWO ##
    useLayoutEffect(
        () => {
            // only really need this if(divRef.current) check if the div is conditionally rendered and thus may not be in the DOM, because this will cause getBoundingClientRect() to be undefined and cause an error.
            if (divRef.current) {
                console.log(`
        #########################################################
                        UseLayoutEffectDemo
        #########################################################
        `);

                console.log(
                    '\n',
                    `inputRef.current.getBoundingClientRect() = `,
                    divRef.current.getBoundingClientRect(),
                    '\n'
                );

                setRect(divRef.current.getBoundingClientRect());

                console.log(`
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        #########################################################
        `);
            }
        },
        [data] // remeasure/run this effect every time there's new data
    );

    // ## THREE ##
    const measureOneRect = useMeasureOne(divRefTwo, [data]);

    // ## FOUR ##
    const [measureTwoRect, measureTwoRef] = useMeasureTwo([data]);

    return (
        <div
            style={{
                border: '2px solid cornsilk',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
            }}
        >
            <h4>Hello UseLayoutEffectDemo</h4>
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
                ref={inputRef}
                type="text"
                name="name"
                placeholder="Enter name..."
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
                style={styles['input']}
            />
            {/* We add display: flex so that the div does NOT stretch full width */}
            <h3>ONE</h3>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <div style={{ display: 'flex' }} ref={divRef}>
                JSON.stringify(data) {JSON.stringify(data)}
            </div>
            <hr />
            <h3>measureOne</h3>
            <pre>{JSON.stringify(measureOneRect, null, 2)}</pre>
            <div style={{ display: 'flex' }} ref={divRefTwo}>
                JSON.stringify(data) {JSON.stringify(data)}
            </div>
            <hr />
            <h3>TWO</h3>
            <pre>{JSON.stringify(measureTwoRect, null, 2)}</pre>
            <div style={{ display: 'flex' }} ref={measureTwoRef}>
                JSON.stringify(data) {JSON.stringify(data)}
            </div>
        </div>
    );
};

export default UseLayoutEffectDemo;
