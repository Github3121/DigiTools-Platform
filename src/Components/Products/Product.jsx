import React from 'react';
import { Check } from 'lucide-react';

const Product = ({ product, addToCart, cartItems, notify }) => {

    return (
        <div className='flex flex-col relative items-start justify-center gap-4 w-[380px] h-auto p-[24px] rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
            <span className='absolute top-[10px] right-[10px] bg-[#FEF3C6] text-[#BB4D00] rounded-full text-[14px] py-[6px] px-[12px]'>{product.tag}</span>
            <span className='p-[14px] border-2 border-[#F2F2F2] rounded-full flex justify-center items-center'><img src={product.image} alt={product.alt} width={32} height={32} /></span>
            <h3 className='text-[24px] font-bold'>{product.name}</h3>
            <p className='text-4 text-[#627382]'>{product.description}</p>
            <p className='text-[#627382] text-4'><span className='font-bold text-[24px] text-[#101727]'>${product.price}</span>/{product.period}</p>
            <ul>
                {product.features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2'><Check size={20} color="#30B868" />{feature}</li>
                ))}
            </ul>
            <button
                onClick={() => { addToCart(product); notify(`${product.name} has been added to the cart!`); }}
                disabled={cartItems.some(item => item.id === product.id)}
                className={`btn w-full rounded-full text-white text-4 font-bold py-[15px] ${cartItems.some(item => item.id === product.id) ? 'bg-gray-500 cursor-not-allowed' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}
            >
                {cartItems.some(item => item.id === product.id) ? 'Added to Cart' : 'Buy Now'}
            </button>
        </div>
    );
};

export default Product;