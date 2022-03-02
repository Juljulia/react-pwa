import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.ul`
  background-color: var(--secondary);
  margin: 0;
  width: 55%;
  max-height: 400px;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 24px;
  margin: 0 auto;
`;

const StyledListItem = styled.li`
  border-radius: 4px;
  list-style: none;
  min-height: 32px;
`;

const CategoryLink = styled(Link)`
  font-size: 16px;
  letter-spacing: 0;
  text-decoration: none;
  color: var(--darkText);
`;

export const CategoryList = ({ categories, wrapperHeight = '300px' }) => {
  return (
    <StyledWrapper wrapperHeight={wrapperHeight}>
      {categories.map((category) => (
        <StyledListItem key={category.id}>
          <CategoryLink
            to={`/category/${category.id}`}
            state={{
              subCategories: category.subCategories,
              title: category.name,
            }}
          >
            {category.name}
          </CategoryLink>
        </StyledListItem>
      ))}
    </StyledWrapper>
  );
};
