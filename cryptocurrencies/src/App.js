import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Conversion from './components/Conversion';
import Spinner from './components/Spinner';
import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [result, setConversion] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const convertCurrency = async () => {
      if (currency === '' || cryptocurrency === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      setLoading(true);
      const result = await axios.get(url);
      setLoading(false);
      setConversion(result.data.DISPLAY[cryptocurrency][currency]);
    };
    convertCurrency();
  }, [currency, cryptocurrency]);

  return (
    <Container>
      <div>
        <Image src={image} alt='crypto image' />
      </div>
      <div>
        <Heading>CRYPTO CURRENCY</Heading>
        <Form setCurrency={setCurrency} setCryptocurrency={setCryptocurrency} />
        {loading ? <Spinner /> : <Conversion result={result} />}
      </div>
    </Container>
  );
}

export default App;
