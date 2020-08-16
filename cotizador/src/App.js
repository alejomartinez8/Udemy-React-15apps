import React, { useState } from 'react'
import Header from './components/Header'
import styled from '@emotion/styled'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [summary, saveSummary] = useState({
    budget: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const [loading, saveLoading] = useState(false)

  const { budget, data } = summary

  return (
    <Container>
      <Header title='Cotizador de Seguros' />
      <FormContainer>
        <Form saveSummary={saveSummary} saveLoading={saveLoading} />
        {loading ? <Spinner /> : <Summary data={data} />}
        {!loading ? <Result budget={budget} /> : null}
      </FormContainer>
    </Container>
  )
}

export default App
