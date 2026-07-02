import React from 'react';
import UserIcon from '../../assets/user.png';
import PackageIcon from '../../assets/package.png';
import RocketIcon from '../../assets/rocket.png';
import { Check } from 'lucide-react';

const Pricing = ({ pricingPromise }) => {
    return (
        <div className="py-[120px] px-[200px] flex flex-col items-center justify-center gap-10 bg-white">
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <h1 className='text-[48px] font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch gap-[30px] justify-center w-full p-[24px]'>
                <div className='flex flex-col items-start justify-between gap-[24px] p-[24px] bg-[#F9FAFC] w-[350px] h-auto rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
                    <div>
                        <h4 className='text-[24px] font-bold'>Starter</h4>
                        <p className='text-[16px] text-[#627382]'>Perfect for getting started</p>
                    </div>
                    <div className='text-[20px] text-[#627382]'>
                       <span className='text-[32px] font-bold text-black'>$0</span>/Month
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Basic templates</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Community support</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />1 project per month</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-4 font-bold py-[15px]'>Get Started Free</button>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-[24px] p-[24px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-[350px] h-auto rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300 relative'>
                    <span className='absolute top-[-18px] left-[50%] transform -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] rounded-full text-[14px] py-[6px] px-[12px]'>Most Popular</span>
                    <div>
                        <h4 className='text-[24px] font-bold'>Pro</h4>
                        <p className='text-[16px] text-[#ffffff]'>Best for professionals</p>
                    </div>
                    <div className='text-[20px] text-[#ffffff]'>
                       <span className='text-[32px] font-bold text-white'>$29</span>/Month
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Access to all premium tools</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Unlimited templates</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Priority support</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Unlimited projects</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Cloud sync</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#ffffff" />Advanced analytics</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <button className='btn w-full rounded-full text-[#4F39F6] text-4 font-bold py-[15px]'>Start Pro Trial</button>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-[24px] p-[24px] bg-[#F9FAFC] w-[350px] h-auto rounded-[16px] border-3 border-[#F2F2F2] hover:shadow-lg hover:shadow-[#4F39F6] hover:scale-101 duration-300'>
                    <div>
                        <h4 className='text-[24px] font-bold'>Enterprise</h4>
                        <p className='text-[16px] text-[#627382]'>For teams and businesses</p>
                    </div>
                    <div className='text-[20px] text-[#627382]'>
                       <span className='text-[32px] font-bold text-black'>$99</span>/Month
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Everything in Pro</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Team collaboration</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Custom integrations</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Dedicated support</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />SLA guarantee</li>
                            <li className='flex items-center gap-2'><Check size={20} color="#30B868" />Custom branding</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-4 font-bold py-[15px]'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;