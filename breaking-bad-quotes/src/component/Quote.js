import React from 'react'
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800 px;

  @media (min-widht: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4 rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`

const Quote = ({ quote: { quote, author } }) => {
  return (
    <QuoteContainer>
      <h1>{quote}</h1>
      <p>-{author}</p>
    </QuoteContainer>
  )
}

export default Quote
