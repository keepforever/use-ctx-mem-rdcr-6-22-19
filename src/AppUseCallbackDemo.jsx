import React, { useState, useCallback } from 'react';
// locals
import UseCallbackHello from './comps/UseCallbackHello';
import UseCallbackSquare from './comps/UseCallbackSquare';

const AppUseCallbackDemo = props => {
    const [count, setCount] = useState(0);
    const favNumbers = [7, 21, 37];

    const increment = useCallback(
        n => {
            // eliminate cout as dependancy by using updator function into
            // setcount()
            // setCount(count + 1);
            setCount(c => c + n);
        },
        [setCount]
    );

    // Another usecase is in conjunction with useEffect(), when you only want
    // the effect to fire when increment changes and useCall back can prevent
    // increment from changing "all the time"
    // useEffect(() => { ... }, [increment])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left'
            }}
        >
            <p>Count: {count}</p>
            <h3>Hello AppUseCallbackDemo</h3>
            {/* Every time this component renders, the lamda function passed to increment will be recreated.  this is what useCallback is good for adressing */}
            <UseCallbackHello increment={increment} />
            {favNumbers.map(n => {
                return <UseCallbackSquare key={n} n={n} increment={increment} />;
            })}
        </div>
    );
};

export default AppUseCallbackDemo;
