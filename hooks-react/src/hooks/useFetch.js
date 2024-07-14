import { useState, useEffect } from 'react';
export const useFetch = (url, method = 'GET') => {

    const [response, setResponse] = useState(
        {
            data: null,
            loading: true,
        }
    )

    useEffect(() => {
        fetch(url, { method })
            .then(res => res.json())
            .then(data => setResponse({ data, loading: false }))

    }, [url, method])

    return response
}
