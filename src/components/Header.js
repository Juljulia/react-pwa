import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  background-color: var(--pepper);
  position: sticky;
  top: 0;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const StyledLink = styled(Link)`
  font-size: 32px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0 24px;
  color: var(--lightText);
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to='/'>MAT</StyledLink>
    </StyledHeader>
  );
};