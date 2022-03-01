import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;

export const Breadcrump = (props) => {
  return (
    <Container>
      <StyledLink to='/'>HELLO</StyledLink>
    </Container>
  );
};
