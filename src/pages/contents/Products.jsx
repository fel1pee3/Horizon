import React, { useState, useEffect } from 'react';
import AxiosProducts from '../../api/AxiosProducts';
import ProductCard from '../../components/ProductCard/ProductCard';

import "../../styles/Products.css"

function ProductSearch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const value = await AxiosProducts('iphone');
        setProducts(value.results);
      } catch (error) {
        console.error('DEU ERRO!!!!!!:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className='container'>
        
      {products.map(e =>
        <ProductCard
          key={e.id} 
          data={e} 
        />
      )} 

    </section>
  );
}

export default ProductSearch;
