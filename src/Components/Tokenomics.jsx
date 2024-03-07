import React from 'react';
import bgimg3 from "../assets/bgimg3.png";
import img4 from "../assets/img4.png";

const Tokenomics = () => {
    return (
        <div className='w-full flex text-center '>
            <div className='bg-black text-center '>
                <span className='text-main-red text-[20px] font-bold'>TOKONOMICS</span>
            </div>
            <div className='bg-gradient-to-tl h-[500px] w-full relative flex flex-col gap-10'>
                <img src={bgimg3} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='flex justify-around items-center mt-[100px]'>
                    <div className='flex flex-col w-[300px] h-[300px] items-center border rounded-[10px] gap-y-[10px] border-main-red pt-4 bg-black'>

                        <div className='text-white bg-main-orange rounded-md p-2 px-4'>
                            TOKEN DETAILS
                        </div>

                        <div className='flex gap-[20px]'>
                            <p className='text-white text-left'>Name</p>
                            <p className='text-main-red'>Saviour</p>
                        </div>

                        <div className='flex gap-[20px]'>
                            <p className='text-white mr-16 text-left'>Symbol</p>
                            <p className='text-main-red'>SVR</p>
                        </div>

                        <div className='flex gap-[20px]'>
                            <p className='text-white text-left'>Total Supply</p>
                            <p className='text-main-red'>1000 Trillion</p>
                        </div>

                        <div className='flex gap-[20px]'>
                            <p className='text-white text-left'>Decimals</p>
                            <p className='text-main-red'>18</p>
                        </div>

                    </div>
                    <div className='w-[40%] bg-black'>
                        <img src={img4} alt="" className='bg-black'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
