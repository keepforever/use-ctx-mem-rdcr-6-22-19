const addPerson = (state, person) => {
    const newPeople = [...state.people, person];
    return {
        ...state,
        people: newPeople
    };
};
// note: we always have a "type" property on any actions passed to reducer
const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return addPerson(state, action.payload);
        default:
            return state;
    }
};

export default peopleReducer;
