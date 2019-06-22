import React, { useEffect, useContext, useRef } from 'react';
import PeopleContext from '../context/peopleContext';
// comps

const PeopleInfo = () => {
    const renders = useRef(0);
    console.log('PeopleInfo render count = ', ++renders.current, '\n');

    const { people } = useContext(PeopleContext);

    const newestPerson = people[people.length - 1].name;

    useEffect(
        () => {
            document.title = `newestPerson = ${newestPerson}`;
            console.log('PeopleInfo, useEffect ran', '\n');
            return () => {
                console.log('PeopleInfo, useEffect, unmounted', '\n');
            };
        },
        [people, newestPerson]
    );

    return (
        <div
            style={{
                border: '1px solid red',
                display: 'flex',
                flexDirection: 'column',
                margin: '30px'
            }}
        >
            <h2>Hello PeopleInfo</h2>
            {people.map((p, i) => {
                return (
                    <p key={p.name}>
                        #{i + 1} - {p.name}
                    </p>
                );
            })}
        </div>
    );
};

export default React.memo(PeopleInfo);
