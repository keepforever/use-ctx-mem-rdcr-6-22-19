import { createContext } from 'react';

const peopleContext = createContext({
    people: [],
    addPerson: person => {},
    testBoolean: false
});

export default peopleContext;
