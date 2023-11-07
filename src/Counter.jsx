import React, { useState } from 'react'

const Counter = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 2,
        counter3: 0
    })
    
    const contador1 = ()=>{
        setCounter({
            ...state,
            counter1: counter1+1
        });
    }
    const contador2 = ()=>{
        setCounter({
            ...state,
            counter2: counter2+1
        });
    }
    const contador3 = ()=>{
        setCounter({
            ...state,
            counter3: counter3+1
        });
    }
    const { counter1, counter2, counter3 } = state
    return (
        <div>
            <h3>Counter App</h3>
            <h5>Counter A: {counter1}</h5>
            <h5>Counter B: {counter2}</h5>
            <h5>Counter C: {counter3}</h5>
            <button
                className='btn btn-primary'
                onClick={contador1}
            >
                A+1
            </button>
            <button onClick={contador2} className='btn btn-primary'>
                B+1
            </button>
            <button onClick={contador3} className='btn btn-primary'>
                C+1
            </button>
            
        </div>
    )
}

export default Counter
