import { useState } from "react"
import PropType from 'prop-types'

const AddCategory = ( {addNewCategory} ) => {
    const [category, setCategory] = useState('')//huk
    //Permite la escritura en el input
    const onInputChange = ({ target }) => {
      setCategory(target.value)
    }
    //En el submit
    const onSubmit = (event)=>{
      //evita la actualizacion de la página
      event.preventDefault()
      //Si la escritura es vacio o espacios
      if(category.trim().length <= 2) return;
      // Agrega una nueva categoria
      addNewCategory(category);
      //Limpia el input
      setCategory('')
    }
    return (
      <form onSubmit={ onSubmit }>
          <input 
            type="text" 
            placeholder="Search Gift" 
            value={category} 
            onChange={ onInputChange } 
          />
      </form>
    )
}

AddCategory.propType = {
  addNewCategory: PropType.func.isRequired
}

export default AddCategory
