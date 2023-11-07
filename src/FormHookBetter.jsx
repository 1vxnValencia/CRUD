import React, { useState } from 'react'

const FormHookBetter = () => {
  const [ formState, setFormState ] = useState({
    username: 'Ivan',
    password: '123456'
  })
  const { username, password } = formState
  const onFormStateChange = ({target})=>{
    const {name, value}= target
    console.log(name, value)
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
            onChange={onFormStateChange}
        />
        <input
            // style={margin: 5px,}
            type="password"
            name='password'
            placeholder='Password'
            value={password}
            onChange={onFormStateChange}
        />
    </>
  )
}

export default FormHookBetter
