import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrump } from '../components/Breadcrump';
import { Item } from '../components/Item';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export function Category(props) {
  const location = useLocation();
  const { id } = useParams();
  const [items, setItems] = React.useState([]);

  const { subCategories, title } = location.state;

  const apiUrl = 'https://matse.futurememories.se';
  //https://matse.futurememories.se/listByCategory?categoryId=10840

  const fetchCategories = async () => {
    const data = await fetch(`${apiUrl}/listByCategory?categoryId=${id}`);
    const json = await data.json();
    console.log(json);
    setItems(json);
    //imageUrl
    //formattedName
    //categories.name
    //brand.name
  };

  React.useEffect(() => {
    fetchCategories();
  }, [id]);

  return (
    <div>
      <Breadcrump />
      <ul>
        {subCategories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.id}`}
              state={{ subCategories: category.subCategories }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link to='/'>Home</Link>
      <p>{title}</p>
      <p>{items[0]?.primaryCategoryNamePath}</p>
      <Container>
        {items.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </Container>
    </div>
  );
}
