import React from 'react';
import './Hero.css';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/HDdTFF54/banner.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-center lg:text-left gap-4">
                    <div className="relative inline-flex items-center justify-start bg-[#E1E7FF] py-2 pr-4 pl-8 rounded-full ">
                        <span className="absolute left-4 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F39F6]"></span>
                        </span>
                        <span className="gd-txt font-medium text-4">
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                    <h1 className="text-[72px] font-extrabold leading-20">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6 text-[18px] text-[#627382] font-regular leading-8">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products
                    </p>
                    <div>
                        <button className="btn btn-primary rounded-full py-[15px] px-4 text-4 font-bold text-white">Explore Products</button>
                        <button className="btn btn-outline btn-primary ml-4 py-[15px] px-4 text-4 font-bold rounded-full gap-[10px]"><Play size={20} />Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;