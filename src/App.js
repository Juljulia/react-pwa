import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

// Breadcrump nameFullPath
// SubCategories
// ﹂Bageri
//   ﹂Bröd
//   ﹂Fikabröd
//   ﹂...
// ﹂Drycker
//   ﹂Vatten
//   ﹂Läsk

// SubcategoryComponent ('<categoryId>)

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
