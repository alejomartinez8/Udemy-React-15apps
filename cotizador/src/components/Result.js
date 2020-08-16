import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Msg = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`
const BudgetResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

const BudgetText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

const Result = ({ budget }) => {
  return budget === 0 ? (
    <Msg>Elige marca, año y tipo de seguro</Msg>
  ) : (
    <BudgetResult>
      <TransitionGroup component='span' className='resultado'>
        <CSSTransition
          classNames='resultado'
          key={budget}
          timeout={{ enter: 500, exit: 500 }}>
          <BudgetText>
            El total es: $ <span>{budget}</span>
          </BudgetText>
        </CSSTransition>
      </TransitionGroup>
    </BudgetResult>
  )
}

Result.propTypes = {
  budget: PropTypes.number.isRequired
}

export default Result
