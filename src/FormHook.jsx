import React, { useState } from 'react'

const FormHook = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleInputUsername = ({target})=>{
        setUsername(target.value)
    }
    const handleInputPassword = ({target})=>{
        setPassword(target.value)
    }
  return (
    <>
        <form action="">

        </form>
        <h4>Manejo de formulario</h4>
        <hr />
        <input
            type="text"
            name='userName'
            placeholder='Username'
            value={username}
            onChange={handleInputUsername}
        />
        <input
            // style={margin: 5px,}
            type="password"
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleInputPassword}
        />
    </>
  )
}

export default FormHook
