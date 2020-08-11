import React, { useState, Fragment, useEffect } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  // appointments in localStorage
  let initAppointments = JSON.parse(localStorage.getItem('appointments'))
  if (!initAppointments) {
    initAppointments = []
  }
  // appointments array useState
  const [appointments, saveAppointments] = useState(initAppointments)

  // Use Effect
  useEffect(() => {
    if (initAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments, initAppointments])

  // Add new appointment
  const createAppointment = (appointment) => {
    saveAppointments([...appointments, appointment])
  }

  // Delete Appointments
  const deleteAppointment = (id) => {
    const newAppointmets = appointments.filter((app) => app.id !== id)
    saveAppointments(newAppointmets)
  }

  const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
