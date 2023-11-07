import { useState } from 'react'

export const counterCH = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 2,
        counter3: 0
    })
    const { counter1, counter2, counter3 } = state
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
    return {
        state,
        contador1,
        contador2,
        contador3
    }
}
