const addPerson = (state, person) => {
    const newPeople = [...state.people, person];
    return {
        ...state,
        people: newPeople
    };
};
const toggleTest = (state) => {
    return {
        ...state,
        testBoolean: !state.testBoolean
    };
};
// note: we always have a "type" property on any actions passed to reducer
const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return addPerson(state, action.payload);
        case 'TOGGLE_TEST':
            return toggleTest(state);
        default:
            return state;
    }
};

export default peopleReducer;
