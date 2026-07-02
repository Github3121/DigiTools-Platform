import { ShoppingCart } from 'lucide-react';
import React from 'react';

const AddedCarts = ({ cartItems, removeFromCart, clearCart }) => {
    return (
        <div className='flex flex-col justify-between items-start p-[40px] border-2 border-[#F2F2F2] rounded-lg mx-[10%] mb-[120px] w-[70%]'>
            <h2 className='text-[28px] font-bold'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className='flex flex-col items-center justify-center gap-4 mt-10 w-full'>
                    <ShoppingCart size={100} color="#627382" />
                    <p className='text-[16px] text-[#627382] mt-4'>Your cart is empty.</p>
                </div>
            ) : (
                <div className='flex flex-col gap-4 mt-10 w-full'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center justify-between gap-4 bg-[#F9FAFC] border-b border-[#F6F6F6] py-4 w-full py-[22.5px] px-[20px] rounded-[16px]'>
                            <div className='flex items-center gap-4'>
                                <span className='p-[14px] border-2 border-[#F2F2F2] rounded-full flex justify-center items-center'><img src={item.image} alt={item.name} width={32} height={32} /></span>
                                <div>
                                    <h3 className='text-[24px] font-bold'>{item.name}</h3>
                                    <p className='text-[16px] text-[#627382]'>${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className='text-[#FF3980] cursor-pointer active:border active:border-red-500 hover:text-white hover:bg-black py-1.5 px-2 rounded-full duration-500 font-bold'>Remove</button>
                        </div>
                    ))}
                    <div></div>
                    <div className='flex justify-between items-center mt-6 w-full'>
                        <p className='text-[16px] text-[#627382]'>Total: </p>
                        <p className='text-[24px] font-bold text-[#101727]'>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center mt-6 w-full'>
                        <button onClick={() => clearCart()} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-[15px] rounded-full hover:opacity-90 transition-opacity duration-300 w-full text-[16px] font-bold cursor-pointer'>Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddedCarts;