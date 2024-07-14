import { useState } from 'react';

export const useCounter = (initialValue = 100) => {
    const [counter, setCounter] = useState(initialValue);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function reset() {
        setCounter(initialValue)
    }


    return [counter, increment, decrement, reset]
}

