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
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const apiUrl = 'https://matse.futurememories.se';

  const fetchCategories = async () => {
    setLoading(true);
    const data = await fetch(`${apiUrl}/getCategoryTree`);
    if (data.status !== 200)
      return setError('Tyvärr, kunde inte hämta kategorier.');

    const json = await data.json();
    setCategories(json.subCategories);
    setLoading(false);
    window.localStorage.setItem(
      'subCategories',
      JSON.stringify(json.subCategories)
    );
  };

  React.useEffect(() => {
    const storedCategories = JSON.parse(
      window.localStorage.getItem('subCategories')
    );
    setCategories(storedCategories);
  }, []);

  React.useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
  }, [categories]);

  return (
    <Container>
      <p className='title'>Vad är du sugen på?</p>
      {loading && <p>Hämtar kategorier...</p>}
      {error && <p>{error}</p>}
      {categories && (
        <>
          <p>Välj en kategori</p>
          <CategoryList categories={categories} />
        </>
      )}
    </Container>
  );
};
