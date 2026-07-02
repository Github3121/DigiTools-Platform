import React from 'react';
import Inastagram from '../../assets/Insta.png';
import Facebook from '../../assets/Face.png';
import X from '../../assets/X.png';

const TheEnd = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 py-[80px] px-6 md:px-16 lg:px-[120px] bg-[#0F172A] text-white">
            <div className="text-left flex flex-col gap-4 max-w-sm">
                <h2 className="text-4xl font-bold">DigiTools</h2>
                <p className='leading-[24px] text-[#94A3B8]'>
                    Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-[48px] text-start w-full lg:w-auto'>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#ffffff] text-[20px] font-semibold mb-2'>Product</li>
                        <a href="/features" className='text-[#94A3B8] hover:text-white transition-colors block'>Features</a>
                        <a href="/pricing" className='text-[#94A3B8] hover:text-white transition-colors block'>Pricing</a>
                        <a href="/templates" className='text-[#94A3B8] hover:text-white transition-colors block'>Templates</a>
                        <a href="/integrations" className='text-[#94A3B8] hover:text-white transition-colors block'>Integrations</a>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#ffffff] text-[20px] font-semibold mb-2'>Company</li>
                        <a href="/about" className='text-[#94A3B8] hover:text-white transition-colors block'>About</a>
                        <a href="/blog" className='text-[#94A3B8] hover:text-white transition-colors block'>Blog</a>
                        <a href="/careers" className='text-[#94A3B8] hover:text-white transition-colors block'>Careers</a>
                        <a href="/press" className='text-[#94A3B8] hover:text-white transition-colors block'>Press</a>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#ffffff] text-[20px] font-semibold mb-2'>Resources</li>
                        <a href="/documentation" className='text-[#94A3B8] hover:text-white transition-colors block'>Documentation</a>
                        <a href="/help-center" className='text-[#94A3B8] hover:text-white transition-colors block'>Help Center</a>
                        <a href="/community" className='text-[#94A3B8] hover:text-white transition-colors block'>Community</a>
                        <a href="/contact" className='text-[#94A3B8] hover:text-white transition-colors block'>Contact</a>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-4'>
                <span className='text-[#ffffff] text-[20px] font-semibold'>Social Links</span>
                <div className='flex gap-[12px]'>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={Inastagram} alt="Instagram" width={40} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={Facebook} alt="Facebook" width={40} />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={X} alt="X" width={40} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TheEnd;