import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = randomTodo => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(
        () => {
            setLoading(true);
            axios
                .get('https://jsonplaceholder.typicode.com/todos/' + randomTodo)
                .then(res => {
                    console.log('\n', '\n', `res = `, res, '\n', '\n');
                    setData(res.data);
                    setLoading(false);
                });
        },
        []
    );
    return { data, loading };
};
