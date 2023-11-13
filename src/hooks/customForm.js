import { useState } from "react"

export const customForm = (initiable={}) => {
    const [ formState, setFormState ] = useState(initiable)
    
    const onFormStateChange = ({target})=>{
        const {name, value}= target
        setFormState({
          ...formState,
          [name]:value
        })
    }
    const resetForm = (newValue = {})=>{
        setFormState(newValue)
    }
    return {
        ...formState,
        onFormStateChange,
        resetForm
    }
}
/**
 * hook reducer
 * 
 */
