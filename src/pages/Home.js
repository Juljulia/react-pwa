import React from 'react';
import styled from 'styled-components';
import { CategoryList } from '../components/CategoryList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: calc(100vh - 56px);

  .title {
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const Home = () => {
  const [categories, setCategories] = React.useState(null);
  const apiUrl = 'https://matse.futurememories.se';

  const fetchCategories = async () => {
    const data = await fetch(`${apiUrl}/getCategoryTree`);
    const json = await data.json();
    setCategories(json.subCategories);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <p className='title'>Vad är du sugen på?</p>
      {categories && (
        <>
          <p>Välj en kategori</p>
          <CategoryList categories={categories} />
        </>
      )}
    </Container>
  );
};
