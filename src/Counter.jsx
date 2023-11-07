import React from 'react'
import { counterCH } from './hooks/counterCH'

const Counter = () => {
    const {state, contador1, contador2, contador3 } =counterCH()
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
