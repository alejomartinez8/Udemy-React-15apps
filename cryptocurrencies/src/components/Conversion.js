import React from 'react';
import styled from '@emotion/styled';

const DivResult = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Conversion = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <DivResult>
      <Price>
        The prize is: <span>{result.PRICE}</span>
      </Price>
      <Info>
        The highest day price: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        The lowest day price: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        The highest day price: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Variation day (24h): <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update: <span>{result.LASTUPDATE}</span>
      </Info>
    </DivResult>
  );
};

export default Conversion;
