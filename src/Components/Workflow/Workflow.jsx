import React from 'react';

const Workflow = () => {
    return (
        <div className="py-[120px] px-[200px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full flex flex-col items-center justify-center text-white gap-[40px]">
            <div className='flex flex-col items-center justify-center gap-[16px] text-center'>
                <h2 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h2>
                <p className='text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[16px]'>
                <div className='flex justify-between items-center gap-[16px]'>
                    <button className='rounded-full text-[#4F39F6] text-[16px] bg-white py-[15px] px-[16px] font-semibold hover:bg-[#d3d3d3] hover:translate-y-0.5 cursor-pointer duration-300'>Explore Products</button>
                    <button className='rounded-full text-white text-[16px] bg-transparent py-[15px] px-[35px] font-semibold border hover:text-[#4F39F6] hover:border hover:bg-white cursor-pointer duration-300'>View Pricing</button>
                </div>
                <p className='text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;