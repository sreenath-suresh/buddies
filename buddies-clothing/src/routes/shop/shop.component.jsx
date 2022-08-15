import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
        <h1>Shop</h1>
        <div className='products-container'>
    
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      

    </div>
  );
};

export default Shop;
