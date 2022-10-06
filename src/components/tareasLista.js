import React from 'react'
import TareaItem from './tareaItem';

function TareasLista({tareas}) {
  return (
    <div>{
      tareas.map((tarea, index) => (
      <TareaItem key = {`${index}`} tarea = {tarea} />
      ))
      }
    </div>
  )
}

export default TareasLista;