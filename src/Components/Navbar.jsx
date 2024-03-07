import React from 'react';
import bgimg1 from "../assets/bgimg1.png";
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='bg-gradient-to-tl h-[500px] w-full relative flex flex-col gap-10'>
                <img src={bgimg1} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='flex items-center h-[100px] justify-around'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[50px]'>
                            {/* -------------- logo -----------------*/}
                            <img src={logo} alt="" class="rounded-full" />
                        </div>
                        <div class="flex  text-[25px] font-bold text-white ">
                            <span className='mb-[15px]'>Saviour</span>
                        </div>
                    </div>

                    <div className='text-white flex justify-between w-[40%] border-none rounded-full p-2 bg-black'>
                        <span>Home</span>
                        <span>IDO</span>
                        <span>Tokenomics</span>
                        <span>Roadmap</span>
                        <span>Coming soon </span>
                    </div>

                    <div class="shadow-xl"><button class="text-white bg-main-orange rounded-md px-2">Connect Wallet</button></div>

                </div>
                <div className='flex justify-center items-center text-white text-[45px]'>
                    <span>WHERE BLOCKCHAIN HEROES THRIVE, RESCUING <br /> DREAMS, ELEVATING FORTUNES</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
