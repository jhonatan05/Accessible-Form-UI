import React from 'react'
import './Task.scss'

const Task = () => {
  return (
    <div className="task">
      <h4>Completitud del perfil</h4>
      <section className="task__list">
        <span>Crear cuenta</span>
        <span>Actualización de los avances de la hoja de ruta.</span>
        <span>Configurar perfil público.</span>
        <span>Completa tu primer proyecto.</span>
        <span>Invita a tus amigos</span>
      </section>
    </div>
  )
}

export default Task
