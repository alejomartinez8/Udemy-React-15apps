import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ({ saveExpense, saveCreateExpense }) => {
  const [name, saveName] = useState('')
  const [qty, saveQty] = useState(0)
  const [error, saveError] = useState(false)

  const handleSubmint = (e) => {
    e.preventDefault()

    if (qty < 1 || isNaN(qty) || name.trim() === '') {
      saveError(true)
      return
    }
    saveError(false)

    const expense = {
      name,
      qty,
      id: shortid.generate()
    }

    saveExpense(expense)
    saveCreateExpense(true)

    // clear form
    saveName('')
    saveQty(0)
  }

  return (
    <form onSubmit={handleSubmint}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error msg='Ambos campos son obligatorios o Valor incorrecto' />
      ) : null}

      <div className='campo'>
        <label htmlFor=''>Gasto*:</label>
        <input
          type='text'
          className='u-full-widht'
          placeholder='Ej. Transporte'
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label htmlFor=''>Valor*:</label>
        <input
          type='number'
          className='u-full-widht'
          placeholder='Ej. 300'
          value={qty}
          onChange={(e) => saveQty(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
      />
    </form>
  )
}

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired
}

export default Form
