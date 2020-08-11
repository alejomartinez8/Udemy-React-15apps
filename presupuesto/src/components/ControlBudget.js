import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { reviewBudget } from '../helpers'

const ControlBudget = ({ budget, balance }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto: $ {budget}</div>
      <div className={reviewBudget(budget, balance)}>Saldo: $ {balance}</div>
    </Fragment>
  )
}

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired
}

export default ControlBudget
