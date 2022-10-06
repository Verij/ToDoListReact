import React, {useState} from 'react';
import {StyledContainer, TareasListaContainer, TodoFormContainer,} from './styles';
import data from '../data.json';
import TareasLista from '../components/tareasLista';
import TareaForm from '../components/tareaForm';


const EjemploStyled = () => {
  const [tareas, setTareas] = useState(data);

  const agregarTarea = (nuevaTarea) => {
  console.log('nuevaTarea', nuevaTarea);

  let nuevoItem = {id : +new Date(), tarea: nuevaTarea};

  setTareas([...tareas, nuevoItem])



  }


  const borrarTareas = (e) =>{
    e.preventDefault();
    setTareas([]);
 }


  return (
    <StyledContainer>
      <TodoFormContainer>
      <TareaForm agregarTarea = {agregarTarea}/>
      <button onClick = {borrarTareas}>Borrar</button>
      </TodoFormContainer>

      <TareasListaContainer>
      <TareasLista tareas = {tareas}/>
      </TareasListaContainer>
    </StyledContainer>
  )
};

export default EjemploStyled;