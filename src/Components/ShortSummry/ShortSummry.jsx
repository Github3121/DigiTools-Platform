import React from 'react';
import UserIcon from '../../assets/user.png';
import PackageIcon from '../../assets/package.png';
import RocketIcon from '../../assets/rocket.png';


const ShortSummry = () => {
    return (
        <div className="py-[120px] px-[200px] flex flex-col items-center justify-center gap-10 bg-[#F9FAFB]">
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <h1 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex gap-[30px] justify-center items-center w-full p-[24px]'>
                <div className='flex flex-col items-center justify-center gap-4 relative w-[380px] h-auto p-[24px] rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
                    <span className='text-[14px] font-bold absolute top-[20px] right-[20px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center'>01</span>
                    <span className='w-[100px] h-[100px] flex justify-center items-center bg-[#F1E9FE] rounded-full mt-16'><img src={UserIcon} alt="User" /></span>
                    <h4 className='text-[24px] font-bold'>Create Account</h4>
                    <p className='text-4 text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 relative w-[380px] h-auto p-[24px] rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
                    <span className='text-[14px] font-bold absolute top-[20px] right-[20px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center'>02</span>
                    <span className='w-[100px] h-[100px] flex justify-center items-center bg-[#F1E9FE] rounded-full mt-16'><img src={PackageIcon} alt="Package" /></span>
                    <h4 className='text-[24px] font-bold'>Choose Products</h4>
                    <p className='text-4 text-[#627382] text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 relative w-[380px] h-auto p-[24px] rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
                    <span className='text-[14px] font-bold absolute top-[20px] right-[20px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center'>03</span>
                    <span className='w-[100px] h-[100px] flex justify-center items-center bg-[#F1E9FE] rounded-full mt-16'><img src={RocketIcon} alt="Rocket" /></span>
                    <h4 className='text-[24px] font-bold'>Start Creating</h4>
                    <p className='text-4 text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default ShortSummry;