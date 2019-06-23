// export const addPersonAction = (person, dispatch) => {
//     return () => {
//         console.log('\n', '\n', `addPersonActin FIRED `, '\n', '\n');
//         dispatch({
//             type: 'ADD_PERSON',
//             payload: person
//         });
//     };
// };
//
// Would need to be called like this:
// const addPerson = (person) => {
//     addPersonAction(person, dispatch)();
// };

// export const toggleTestAction = dispatch => {
//     return () => {
//         dispatch({
//             type: 'TOGGLE_TEST'
//         });
//     };
// };
//

export const addPersonAction = (person, dispatch) => {
    console.log('\n', '\n', `addPersonActin FIRED `, '\n', '\n');
    return dispatch({
        type: 'ADD_PERSON',
        payload: person
    });
};

export const toggleTestAction = dispatch => {
    return dispatch({
        type: 'TOGGLE_TEST'
    });
};
