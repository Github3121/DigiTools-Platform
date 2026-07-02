import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-[1px] border-blue-500'>
            <div className='flex justify-around items-center gap-[2px] mx-[200px] my-[60px] text-white text-center'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-[60px] font-extrabold'>50K+</h2>
                    <p className='text-6 font-medium text-white'>Active Users</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-[60px] font-extrabold'>200+</h2>
                    <p className='text-6 font-medium text-white'>Premium Tools</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-[60px] font-extrabold'>4.9</h2>
                    <p className='text-6 font-medium text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;