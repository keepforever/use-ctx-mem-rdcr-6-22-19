import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// comps
import PeopleInfo from './comps/PeopleInfo';
import Form from './comps/Form';

const App = () => {
    const [people, setPeople] = useState([{ name: 'Lisa' }, { name: 'Brian' }]);

    const addPerson = person => {
        setPeople([...people, person]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org/docs/hooks-reference.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    useContext-useReducer-useMemo
                </a>
            </header>
            <Form addPerson={addPerson} />
            <PeopleInfo
                peopleData={people}
                newestPerson={people[people.length - 1].name}
            />
        </div>
    );
};

export default App;
