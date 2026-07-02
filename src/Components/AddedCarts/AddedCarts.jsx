import React from 'react';

const AddedCarts = ({ cartItems, removeFromCart, clearCart }) => {
    return (
        <div className='p-[40px] border-2 border-[#F2F2F2] rounded-lg mx-[10%] mb-[120px] w-[80%]'>
            <h2 className='text-[28px] font-bold'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center gap-4 border-b border-[#F6F6F6] py-4'>
                            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-lg' />
                            <div>
                                <h3 className='text-[24px] font-bold'>{item.name}</h3>
                                <p className='text-[16px] text-[#627382]'>${item.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className='btn btn-error text-white'>Remove</button>
                        </div>
                    ))}
                    <div className='flex justify-between items-center mt-6'>
                        <button onClick={clearCart} className='btn btn-error text-white'>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddedCarts;