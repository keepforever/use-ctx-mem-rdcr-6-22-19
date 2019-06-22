import React, { useEffect, useContext } from 'react';
import PeopleContext from '../context/peopleContext';
// comps
import PeopleCount from './PeopleCount';

const blah = [];

const PeopleInfo = () => {
    const context = useContext(PeopleContext);

    const newestPerson = context.people[context.people.length - 1].name;

    useEffect(
        () => {
            document.title = `newestPerson = ${
                context.people[context.people.length - 1].name
            }`;
            console.log('PeopleInfo, useEffect ran', '\n');
            return () => {
                console.log('PeopleInfo useEffect unmounted = ', '\n');
            };
        },
        [newestPerson]
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <h2>Hello PeopleInfo</h2>
            {blah.map((p, index) => {
                return <p key={p.name}>{p.name}</p>;
            })}
            <PeopleCount />
        </div>
    );
};

export default PeopleInfo;
