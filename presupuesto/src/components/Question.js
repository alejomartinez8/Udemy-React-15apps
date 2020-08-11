import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ saveBudget, saveBalance, saveShowQuestion }) => {
  // Define useState
  const [budgetValue, saveBudgetValue] = useState(0)
  const [error, saveError] = useState(false)

  // handle Change
  const defineBudget = (e) => {
    saveBudgetValue(parseInt(e.target.value, 10))
  }

  // handle submit
  const addBudget = (e) => {
    e.preventDefault()

    // Validation
    if (budgetValue < 1 || isNaN(budgetValue)) {
      saveError(true)
      return
    }

    saveError(false)
    saveBudget(budgetValue)
    saveBalance(budgetValue)
    saveShowQuestion(false)
  }

  return (
    <Fragment>
      <h2>¿Cuál es tu presupuesto?</h2>

      {error ? <Error msg='El presupuesto es Incorrecto' /> : null}

      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='¿Cuál es tu presupuesto?'
          onChange={defineBudget}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />
      </form>
    </Fragment>
  )
}

Question.propType = {
  saveBudget: PropTypes.func.isRequired,
  saveBalance: PropTypes.func.isRequired,
  saveShowQuestion: PropTypes.func.isRequired
}

export default Question
