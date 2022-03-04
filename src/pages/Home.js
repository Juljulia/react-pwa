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
      return setError(
        'Hittade inga kategorier tyvärr, ladda om sidan och försök igen.'
      );

    const json = await data.json();
    setCategories(json.subCategories);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <p className='title'>Vad är du sugen på?</p>
      {loading && <p>Hämtar kategorier...</p>}
      {error && <p>{error}</p>}
      {categories && (
        <div>
          <p>Välj en kategori</p>
          <CategoryList categories={categories} />
        </div>
      )}
    </Container>
  );
};
