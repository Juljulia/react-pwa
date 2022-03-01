import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Main = styled.main``;
export const Layout = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};
