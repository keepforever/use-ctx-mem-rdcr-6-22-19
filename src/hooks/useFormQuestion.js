import { useState } from 'react';
import axios from 'axios';

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        },
        () => {
            setValues(prevState => {
                const stateKeys = Object.keys(prevState);
                const clearStateObj = {};
                stateKeys.forEach(el => {
                    clearStateObj[el] = '';
                });
                return {
                    ...clearStateObj
                };
            });
        },
        async () => {
            const randomTodo = parseInt(Math.floor(Math.random() * 100));
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/' + randomTodo
            );
            console.log('\n', '\n', `data = `, data, '\n', '\n');
            setValues({
                data
            });
        }
    ];
};
