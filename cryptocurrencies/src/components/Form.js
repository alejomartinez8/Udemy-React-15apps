import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';
import Error from './Error';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCurrency, setCryptocurrency }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  const CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'GB Pound' }
  ];
  // Use useCurrency
  const [currency, SelectCurrency] = useCurrency('Choose your Currency:', '', CURRENCIES);

  // use useCryptocurrency
  const [cryptocurrency, SelectCrypto] = useCryptocurrency('Choose your Crytposcurrency:', '', cryptoList);

  // Fetch API
  useEffect(() => {
    const fecthAPI = async () => {
      const uri = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(uri);
      setCryptoList(result.data.Data);
    };
    fecthAPI();
  }, []);

  const calcCurrency = (e) => {
    e.preventDefault();
    if (currency === '' || cryptocurrency === '') {
      setError(true);
      return;
    }
    setError(false);
    setCurrency(currency);
    setCryptocurrency(cryptocurrency);
  };

  return (
    <form onSubmit={calcCurrency}>
      {error ? <Error message='Todos los campos son obligatorios' /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type='submit' value='Calc' />
    </form>
  );
};

export default Form;
