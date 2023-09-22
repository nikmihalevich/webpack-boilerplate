import React, {useState} from 'react';

import cls from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div className={cls.btn}>
            <h1>{counter}</h1>
            <button type="button" onClick={increment}>increment</button>
        </div>
    );
};
