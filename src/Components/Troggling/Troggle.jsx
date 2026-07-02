import React from 'react';

const Troggle = ({ toggle, setToggle, cartItems }) => {
    return (
        <div>
            <div className="mt-[120px] mx-[200px]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
                    <p className='text-[16px] text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className="relative flex w-fit p-1 border-2 border-[#F6F6F6] rounded-full bg-white">
                        <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-500 ease-[cubic-bezier(0.68,-0.2,0.27,1.55)] hover:scale-105 ${toggle ? "left-1" : "left-[calc(50%)]"}`} />
                        <button onClick={() => setToggle(true)} className={`relative z-10 px-6 py-[14px] text-[16px] font-bold rounded-full transition-all duration-500 cursor-pointer ${toggle ? "text-white scale-105" : "text-[#4F39F6]"}`}>Products</button>
                        <button onClick={() => setToggle(false)} className={`relative z-10 px-6 py-[14px] text-[16px] font-bold rounded-full transition-all duration-500 cursor-pointer ${!toggle ? "text-white scale-105" : "text-[#4F39F6]"}`}>Cart ({cartItems.length})</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Troggle;