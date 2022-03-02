import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid #c5c5c5;
  padding: 8px;

  img {
    object-fit: cover;
    width: 100px;
  }

  p {
    text-align: center;
    font-weight: 600;
    padding: 0 8px;
  }

  .price {
    position: absolute;
    padding: 4px;
    background-color: var(--secondary);
    font-weight: bold;
    left: 8px;
    border-radius: 4px;
  }
`;

export const Item = ({ data }) => {
  return (
    <Container>
      <img src={data.imageUrl} alt='TODO' />
      <p>{data.formattedName}</p>
      <span className='price'>{data.price.toFixed(2)}</span>
    </Container>
  );
};
