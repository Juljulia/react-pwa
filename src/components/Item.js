import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  img {
    object-fit: cover;
    width: 160px;
  }
  p {
    text-align: center;
    font-size: 12px;
  }
`;

export const Item = (props) => {
  return (
    <Container>
      <img src={props.data.imageUrl} alt='TODO' />
      <p>{props.data.formattedName}</p>
      <span>{props.data.price.toFixed(2)}</span>
    </Container>
  );
};
