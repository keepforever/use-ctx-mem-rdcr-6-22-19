import React, { useReducer } from 'react';
import './App.css';
// comps
import PeopleInfo from './comps/PeopleInfo';
import FormCustHook from './comps/FormCustHook';
import PeopleCount from './comps/PeopleCount';
import Toggle from './comps/Toggle';
import Header from './comps/Header';
// hooks
import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';
import { toggleTestAction, addPersonAction } from './context/peopleActions';

const App = () => {
    // const [people, setPeople] = useState([{ name: 'Lisa' }, { name: 'Brian' }]);

    const initialState = {
        people: [{ name: 'Lisa' }, { name: 'Brian' }],
        testBoolean: false
    };

    const [state, dispatch] = useReducer(peopleReducer, initialState);

    // const addPerson = person => {
    //     dispatch({
    //         type: 'ADD_PERSON',
    //         payload: person
    //     });
    // };
    //
    // const toggleTest = () => {
    //     dispatch({
    //         type: 'TOGGLE_TEST'
    //     });
    // };

    const addPerson = (person) => {
        addPersonAction(person, dispatch);
    };

    const toggleTest = () => {
        toggleTestAction(dispatch);
    };

    return (
        <div className="App">
            <Header />
            <PeopleContext.Provider
                value={{
                    people: state.people,
                    testBoolean: state.testBoolean,
                    addPerson,
                    toggleTest
                }}
            >
                <FormCustHook />
                <PeopleInfo />
                <PeopleCount />
                <Toggle buttonTitle="Toggle Test" />
            </PeopleContext.Provider>
        </div>
    );
};

export default App;
