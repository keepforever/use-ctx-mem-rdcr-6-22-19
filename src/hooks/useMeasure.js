import { useState, useRef, useLayoutEffect } from 'react';

// Version ONE
export const useMeasureOne = (ref, deps) => {
    const [rect, setRect] = useState({});

    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return rect;
};

// Version TWO
export const useMeasureTwo = deps => {
    const [rect, setRect] = useState({});
    const myRef = useRef();

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [rect, myRef];
};
