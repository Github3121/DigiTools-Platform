import './Navbar.css';
import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({cartItems}) => {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center shadow-sm md:px-50 py-[26px] z-10000">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href='/products'>Products</a></li>
                        <li><a href='/features'>Features</a></li>
                        <li><a href='/pricing'>Pricing</a></li>
                        <li><a href='/testimonials'>Testimonials</a></li>
                        <li><a href='/faq'>FAQ</a></li>
                    </ul>
                </div>
                <a className="gd-txt text-4xl font-bold text-center py-1 md:relative absolute left-[50%] transform -translate-x-1/2 cursor-pointer" href="/">DigiTools</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="flex gap-[34px]">
                    <li><a href='/products'>Products</a></li>
                    <li><a href='/features'>Features</a></li>
                    <li><a href='/pricing'>Pricing</a></li>
                    <li><a href='/testimonials'>Testimonials</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                </ul>
            </div>
            <div className="flex gap-[16px] items-center">
                <button className='font-semibold cursor-pointer flex justify-center items-center relative'><FiShoppingCart /><span className="flex items-center justify-center text-center w-4 h-4 bg-red-500 rounded-full absolute -top-3 -right-3 text-[10px] font-bold text-white">{cartItems.length}</span></button>
                <a className="bg-transparent border-0 text-4 font-semibold cursor-pointer" href='/login'>Login</a>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-4 text-white font-semibold py-[12.5px] px-[16px] rounded-full">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;