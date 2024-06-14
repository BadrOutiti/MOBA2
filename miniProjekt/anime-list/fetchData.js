import { useState, useCallback } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (endpoint) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { data, isLoading, error, fetchData };
};

export default useFetch;
