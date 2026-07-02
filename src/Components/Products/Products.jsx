import React, { use } from 'react';
import Product from './Product';

const Products = ({productsPromise, addToCart, cartItems, notify}) => {
    const productsData = use(productsPromise);
    return (
        <div className='flex flex-wrap gap-[30px] justify-center items-center w-full p-[24px]'>
            {productsData.map((product) => <Product key={product.id} product={product} addToCart={addToCart} cartItems={cartItems} notify={notify} />)}
        </div>
    );
};

export default Products;