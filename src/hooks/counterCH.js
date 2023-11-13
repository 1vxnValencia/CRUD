import { useState } from "react"

export const counterCH = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = (incrementValue=1)=>{
        setCounter(counter+incrementValue);
    }

    const decrementCounter = (decrementValue = 1)=>{
        if (counter == 0) return;
        setCounter(counter-decrementValue);
    }

    const resetCounter = ()=>{
        setCounter(initialValue);
    }
    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}
