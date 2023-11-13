import React from 'react'
import { counterCH } from './hooks/counterCH'

const Counter = () => {
    const {counter, incrementCounter, decrementCounter} = counterCH(0);

    return (
        <>
            <h3>Counter: {counter}</h3>
            <button 
                onClick={()=>incrementCounter(1)}
                className='btn btn-primary'
            >
                +1
            </button>
            <button 
                onClick={()=>decrementCounter(1)}
                className='btn btn-primary ms-2'
            >
                -1
            </button>
        </>
    )
}

export default Counter
