import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { capitalCase } from '../helper'

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Summary = ({ data }) => {
  const { brand, year, plan } = data

  if (brand === '' || year === '' || plan === '') return null

  return (
    <SummaryContainer>
      {' '}
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {capitalCase(brand)}</li>
        <li>Año: {capitalCase(year)}</li>
        <li>Plan: {capitalCase(plan)}</li>
      </ul>
    </SummaryContainer>
  )
}

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary
