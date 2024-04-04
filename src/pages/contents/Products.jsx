import React, { useState, useEffect } from 'react';
import AxiosProducts from '../../api/AxiosProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';

import "../../styles/Products.css"

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const value = await AxiosProducts('iphone');
        setProducts(value.results);
      } catch (error) {
        console.error('DEU ERRO!!!!!!:', error);
      }

      setLoading(false)

    };

    fetchProducts();
  }, []);

  return (
    <section className='container'>

      {loading ? (
        <Loading />
      ) : (
        <div className='container'>
          {products.map(e =>
            <ProductCard
              key={e.id}
              data={e}
            />
          )}
        </div>
      )}

    </section>
  );
}

export default ProductSearch;
