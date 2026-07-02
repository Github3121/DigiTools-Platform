import React, { use } from 'react';
import Product from './Product';

const Products = ({productsPromise, addToCart, cartItems}) => {
    const productsData = use(productsPromise);
    return (
        <div className='flex flex-wrap gap-[30px] justify-center items-center w-full p-[24px]'>
            {productsData.map((product) => <Product key={product.id} product={product} addToCart={addToCart} cartItems={cartItems} />)}
        </div>
    );
};

export default Products;