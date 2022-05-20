import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from './components/Search';
// import Products from './components/Products';
// import ProductCard from './components/ProductCard';
import Category from './components/Category';
// import ProductsArray from './components/ProductsArray';


const App = () => {
  return (
    <div>
      <SearchBar/>
      <Category/>
      {/* <Products/>
      <ProductCard/> */}
    </div>
  )
}

export default App;