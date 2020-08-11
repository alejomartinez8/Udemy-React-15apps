import React, { useState, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({ createAppointment }) => {
  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  })
  const [error, updateError] = useState(false)

  const handleChange = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }
  const { pet, owner, date, time, symptoms } = appointment

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      updateError(true)
      return
    }

    updateError(false)

    // Create Appointments
    appointment.id = uuidv4()
    createAppointment(appointment)

    // Clear form
    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type='text' name='pet' className='u-full-width' placeholder='Nombre Mascota' onChange={handleChange} value={pet} />
        <label>Nombre Dueño</label>
        <input type='text' name='owner' className='u-full-width' placeholder='Nombre Dueño Mascota' onChange={handleChange} value={owner} />
        <label>Fecha</label>
        <input type='date' name='date' className='u-full-width' onChange={handleChange} value={date} />
        <label>Hora</label>
        <input type='time' name='time' className='u-full-width' onChange={handleChange} value={time} />
        <label>Síntomas</label>
        <textarea className='u-full-width' name='symptoms' onChange={handleChange} value={symptoms}></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}

export default Form
