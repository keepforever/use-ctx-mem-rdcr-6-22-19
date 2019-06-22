import React, { useContext, useRef } from 'react';
import PeopleContext from '../context/peopleContext';

const areEqual = (prevProps, nextProps) => {
    console.log('\n', '\n', 'areEqual has run = ', '\n');
    console.log('\n', '\n', 'prevProps = ', prevProps, '\n');
    console.log('\n', '\n', 'nextProps = ', nextProps, '\n');
    console.log(
        'prevProps.buttonTitle === nextProps.buttonTitle = ',
        prevProps.buttonTitle === nextProps.buttonTitle,
        '\n'
    );
    return prevProps.buttonTitle === nextProps.buttonTitle;
};

const Toggle = ({ buttonTitle }) => {
    const renders = useRef(0);
    console.log('Toggle render count = ', ++renders.current, '\n');
    const { toggleTest } = useContext(PeopleContext);

    return (
        <button
            style={{
                background: 'red',
                color: 'black',
                height: 70,
                width: 300,
                fontSize: 27,
                fontWeight: 'bold'
            }}
            onClick={toggleTest}
        >
            {buttonTitle}
        </button>
    );
};

export default React.memo(Toggle, areEqual);
