import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = randomTodo => {
    // console.log('\n', '\n', `useFetch ran = `, randomTodo, '\n', '\n');
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            setLoading(true);
            axios
                .get('https://jsonplaceholder.typicode.com/todos/' + randomTodo)
                .then(res => {
                    // console.log('\n', '\n', `useFetch, res = `, res, '\n', '\n');
                    setData(res.data);
                    setLoading(false);
                });
        },
        [randomTodo, setData]
    );
    return { data, loading };
};
