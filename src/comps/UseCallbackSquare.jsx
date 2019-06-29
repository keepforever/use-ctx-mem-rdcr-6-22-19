import React from 'react';
import styles from '../styles';
import { useCountRenders } from '../hooks/useCountRenders';
// hooks

const componentName = 'UseCallbackSquare';

const UseCallbackSquare = React.memo(({ n, increment }) => {
    useCountRenders(componentName);
    return (
        <div style={styles['row-left']}>
            <h3>Square</h3>
            <button style={styles['input']} onClick={() => increment(n)}>
                INCREMENT {n}
            </button>
        </div>
    );
});

export default UseCallbackSquare;
