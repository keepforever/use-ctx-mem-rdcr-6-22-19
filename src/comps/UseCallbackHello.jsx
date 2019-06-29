import React from 'react';
import styles from '../styles';
import { useCountRenders } from '../hooks/useCountRenders';
// hooks

const name = 'UseCallbackHello';

// We wrap the component in React.memo() because we only want the component to
// re-render when 'increment' changes.  But, because increment is passed in as
// a lamda function, it gets re-created/re-renders on each count increment.

// React.memo() compares props and if props HAVE CHANGED, it rerenders the component.

// By default, this child component will re-render whenever the parent chagnes.
// React.memo() overrides that behavior.

const UseCallbackHello = React.memo(({ increment }) => {
    useCountRenders(name);
    return (
        <div style={styles['row-left']}>
            <h3>Hello UseCallbackHello</h3>
            <button style={styles['input']} onClick={() => increment(3)}>
                INCREMENT
            </button>
        </div>
    );
});

export default UseCallbackHello;
