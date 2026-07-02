import React, { use } from 'react';
import Product from './Product';

const Products = ({productsPromise}) => {
    const productsData = use(productsPromise);
    console.log(productsData);
    return (
        <div className='flex flex-wrap gap-[30px] justify-center items-center w-full p-[24px]'>
            {productsData.map((product) => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default Products;