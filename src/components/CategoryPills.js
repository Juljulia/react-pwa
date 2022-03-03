import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pill = styled(Link)`
  background-color: var(--secondary);
  color: var(--darkText);
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  margin: 4px;
  cursor: pointer;
  border-radius: 10px;
`;

export const CategoryPills = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <Pill
          key={category.id}
          to={`/category/${category.id}`}
          state={{
            subCategories: category.subCategories,
            title: category.name,
          }}
        >
          {category.name}
        </Pill>
      ))}
    </>
  );
};
