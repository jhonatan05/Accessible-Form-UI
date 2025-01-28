import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <main className="form">
      <div className="form__name">
        <label>Nombre completo</label>
        <input type="text" placeholder="Nombre completo" required />
      </div>
      <div className="form__mail">
        <label htmlFor="hola">Correo</label>
        <input type="text" placeholder="email@example.com" required />
      </div>
      <div className="form__password">
        <label htmlFor="">Contraseña</label>
        <input type="password" placeholder="xxxxxxxx" required />
      </div>
      <div className="form__confirm-password">
        <label htmlFor="">Confirmar contraseña</label>
        <input type="password" placeholder="xxxxxxxx" required aria-invalid />
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
