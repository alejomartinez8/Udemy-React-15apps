import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCurrency = (label, initialState = '', options = []) => {
  //State our custom hook
  const [state, updateState] = useState(initialState);

  const Choose = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value=''>--Choose--</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  // Return state, interfaz

  return [state, Choose, updateState];
};

export default useCurrency;
