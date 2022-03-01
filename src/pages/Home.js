import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../components/Header';

// BAGERI
//  - Bröd
//      - Baka hemma
//      - Ljust bröd
//      - Korvbröd
//      - Portionsbröd
// - Fikabröd
//      -subcategory
// - Riskakor & Tilltugg
// - Glutenfritt

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 0 24px;
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
  color: darkblue;
`;

const StyledWrapper = styled.ul`
  background-color: aliceblue;
  margin: 0;
  width: 55%;
  height: 300px;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 24px;
`;

export const Home = () => {
  const [categories, setCategories] = React.useState([]);
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
    <div>
      <Container>
        <p>Välj en kategori:</p>
        <StyledWrapper>
          {categories.map((category) => (
            <StyledListItem>
              <CategoryLink
                to={`category/${category.id}`}
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
      </Container>
    </div>
  );
};
