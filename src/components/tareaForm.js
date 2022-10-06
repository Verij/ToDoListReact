import React, {useState} from 'react'

function TareaForm({agregarTarea}) {

  const [userInput , setUserInput] = useState();

  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userInput.trim() !== ''){
      agregarTarea(userInput);
      setUserInput('')
    }
  }



  return (
    <div>
      <form onSubmit = {handleSubmit}> <input type="text" value = {userInput} onChange = {handleOnChange} />
        <button>Agregar Tarea</button>
        </form>
    </div>
  )
}

export default TareaForm;