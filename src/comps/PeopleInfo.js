import React, { useEffect } from 'react';
// comps
import PeopleCount from './PeopleCount';

const PeopleInfo = ({ peopleData, newestPerson }) => {
    useEffect(
        () => {
            document.title = `newestPerson = ${newestPerson}`;
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
            {peopleData.map((p, index) => {
                return <p key={p.name}>{p.name}</p>;
            })}
            <PeopleCount count={peopleData.length} />
        </div>
    );
};

export default PeopleInfo;
