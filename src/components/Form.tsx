import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <main className="form">
      <div className="form__name">
        <label>Nombre completo</label>
        <input type="text" placeholder="Nombre completo" />
      </div>
      <div className="form__mail">
        <label htmlFor="">Correo</label>
        <input type="text" placeholder="email@example.com" />
      </div>
      <div className="form__password">
        <label htmlFor="">Contraseña</label>
        <input type="password" placeholder="xxxxxxxx" />
      </div>
      <div className="form__confirm-password">
        <label htmlFor="">Confirmar contraseña</label>
        <input type="password" placeholder="xxxxxxxx" />
      </div>
      <div className="form__button">
        <button type="submit" className="form__button__update">
          Actualizar perfil
        </button>
      </div>
    </main>
  )
}

export default Form
