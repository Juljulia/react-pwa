import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryPills } from '../components/CategoryPills';
import { Item } from '../components/Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: calc(100vh - 56px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 8px;
  background: #fff;
  max-height: 500px;
  overflow-y: scroll;
  margin-top: 32px;
  padding: 2px;
  max-width: 1000px;
`;

const StyledInput = styled.input`
  margin: 8px;
  border: 1px solid darkblue;
  border-radius: 2px;
  padding: 4px;
`;

export function Category() {
  const location = useLocation();
  const { id } = useParams();
  const [items, setItems] = React.useState([]);
  const [input, setInput] = React.useState('');
  const { subCategories, title } = location.state;

  React.useEffect(() => {
    const apiUrl = 'https://matse.futurememories.se';
    const fetchSubCategories = async () => {
      const data = await fetch(`${apiUrl}/listByCategory?categoryId=${id}`);
      const json = await data.json();
      setItems(json);
    };

    fetchSubCategories();
    // TODO fix cleanup
  }, [id]);

  const filteredItems = React.useMemo(() => {
    if (!input) return items;
    return items.filter((item) =>
      item.formattedName.toLowerCase().includes(input.toLowerCase())
    );
  }, [items, input]);

  return (
    <Container>
      <h3>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {subCategories.length ? (
          <CategoryPills categories={subCategories} />
        ) : (
          <></>
        )}
      </div>
      <form style={{ padding: '16px 0' }}>
        <label htmlFor='search' style={{ padding: ' 0 4px 8px 0 ' }}>
          Sök vara
        </label>
        <StyledInput
          id='search '
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></StyledInput>
      </form>

      <Grid>
        {filteredItems.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </Grid>
    </Container>
  );
}