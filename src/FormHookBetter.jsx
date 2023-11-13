import React from 'react'
import { customForm } from './hooks/customForm'

const FormHookBetter = () => {
  const {usuario, password, onFormStateChange, resetForm } = customForm({
    usuario: 'Ivan',
    password: '12345'
  })
  const onSubmit = (e)=>{
    e.preventDefault()
    console.log({usuario, password})
    resetForm({usuario:'',password:''})
  }
  return (
    <>
      <h4>Manejo de formulario</h4>
      <hr />
      <form className='container'>
        <input
          type="text"
          name='usuario'
          placeholder='Username'
          value={usuario}
          onChange={onFormStateChange}
          className='form-contol mt-3'
        />
        <input
          type="password"
          name='password'
          placeholder='Password'
          value={password}
          onChange={onFormStateChange}
          className='form-contol mt-3'
        />
        <button className='btn btn-primary mt-3'>
          login
        </button>
      </form>
    </>
  )
}

export default FormHookBetter
