import React, { useState } from 'react'

const Counter = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 2,
        counter3: 0
    })

    const { counter1, counter2, counter3 } = state
    const contador = (contador_num)=>{
        if (contador_num==1) setCounter({ counter1:counter1+1, counter2:counter2, counter3:counter3});
        if (contador_num==2) setCounter({ counter1:counter1, counter2:counter2+1, counter3:counter3});
        if (contador_num==2) setCounter({ counter1:counter1, counter2:counter2, counter3:counter3+1});
    }
    return (
        <div>
            <h3>Counter App</h3>
            <h5>Counter A: {counter1}</h5>
            <h5>Counter B: {counter2}</h5>
            <h5>Counter C: {counter3}</h5>
            <button onClick={contador(1)} className='btn btn-primary'>
                A+1
            </button>
            <button onClick={contador(2)} className='btn btn-primary'>
                B+1
            </button>
            <button onClick={contador(3)} className='btn btn-primary'>
                C+1
            </button>
            
        </div>
    )
}

export default Counter
