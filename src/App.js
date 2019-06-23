import React, { useReducer } from 'react';
import './App.css';
// comps
import PeopleInfo from './comps/PeopleInfo';
import Form from './comps/Form';
import PeopleCount from './comps/PeopleCount';
import Toggle from './comps/Toggle';
// hooks
import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';

const App = () => {
    // const [people, setPeople] = useState([{ name: 'Lisa' }, { name: 'Brian' }]);

    const initialState = {
        people: [{ name: 'Lisa' }, { name: 'Brian' }],
        testBoolean: false
    };

    const [state, dispatch] = useReducer(peopleReducer, initialState);

    const addPerson = person => {
        dispatch({
            type: 'ADD_PERSON',
            payload: person
        });
    };

    const toggleTest = () => {
        dispatch({
            type: 'TOGGLE_TEST'
        });
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
            <PeopleContext.Provider
                value={{
                    people: state.people,
                    testBoolean: state.testBoolean,
                    addPerson,
                    toggleTest
                }}
            >
                <Form />
                <PeopleInfo />
                <PeopleCount />
                <Toggle buttonTitle="Toggle Test" />
            </PeopleContext.Provider>
        </div>
    );
};

export default App;
