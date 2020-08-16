import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { getYearDifference, brandCalc, planCalc } from '../helper'

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = ({ saveSummary, saveLoading }) => {
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const [error, saveError] = useState(false)

  const { brand, year, plan } = data

  const handldeChange = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      saveError(true)
      return
    }

    saveError(false)

    // base 2000
    let result = 2000

    // get years difference
    const difference = getYearDifference(parseInt(year))
    result -= (difference * 3 * result) / 100

    // American 15%, Asian 5%, European 30%
    result = brandCalc(brand) * result

    // Plan Calc basic 20% - full 50%
    result = parseFloat(planCalc(plan) * result).toFixed(2)

    saveLoading(true)

    setTimeout(() => {
      saveLoading(false)
      saveSummary({
        budget: Number(result),
        data
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label htmlFor=''>Marca</Label>
        <Select name='brand' value={brand} onChange={handldeChange}>
          <option value=''>-- Selecciona --</option>
          <option value='american'>Americano</option>
          <option value='european'>Europeo</option>
          <option value='asian'>Asiático</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor=''>Año</Label>
        <Select name='year' value={year} onChange={handldeChange}>
          <option value=''>-- Seleccione --</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={handldeChange}
        />
        Básico
        <InputRadio
          type='radio'
          name='plan'
          value='full'
          checked={plan === 'full'}
          onChange={handldeChange}
        />
        Completo
      </Field>
      <Button type='submit'>Cotizar</Button>
    </form>
  )
}

Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired
}

export default Form
