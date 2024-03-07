import React from 'react'
import bgimg2 from "../assets/bgimg2.png"

const Ido = () => {
    return (
        <div className='w-full text-center border border-black'>
            <div className='bg-black'>
                <span className='text-main-red text-[20px] font-bold'>PARTICIPATE IN OUR EVENT</span>
            </div>
            <div className='bg-gradient-to-tl w-full relative flex flex-col gap-10 border border-black'>
                <img src={bgimg2} alt="" className='w-full h-full object-cover absolute mix-blend-overlay blur-sm' />

                <div className='main-div flex  justify-center items-center  border border-black'>


                    <div id='left' className='flex flex-col gap-10 w-[full]'>

                        <div className='text-white w-[53.9%] h-[55.5%]  border border-main-red bg-black rounded-2xl m-2'>
                            <span> During our IDO event, you will gain early access to our <br /> revolutionary ecosystem, designed to empower <br /> everyone to share wealth and achieve success.</span>
                        </div>

                        <div className='flex flex-col text-left w-[300px] h-[300px] items-center border rounded-[10px] gap-y-[10px] border-main-red pt-4 bg-black'>

                            <div className='text-white bg-main-orange rounded-md p-2 px-4 mb-'>
                                TOKEN INFO
                            </div>

                            <div className='flex gap-[20px] text-left'>
                                <p className='text-white'>Total Token Supply</p>
                                <p className='text-main-red'>20%</p>
                            </div>

                            <div className='flex gap-[20px]'>
                                <p className='text-white mr-16'>Soft Cap</p>
                                <p className='text-main-red'>20%</p>
                            </div>

                            <div className='flex gap-[20px]'>
                                <p className='text-white'>Initial Exchange Rate</p>
                                <p className='text-main-red'>20%</p>
                            </div>

                            <div className='text-white'>
                                Recommended Refferal Commission
                            </div>

                            <div className='flex gap-[20px]'>
                                <p className='text-white'>1st Generation</p>
                                <p className='text-main-red'>20%</p>
                            </div>

                            <div className='flex gap-[20px]'>
                                <p className='text-white'>2nd Generation</p>
                                <p className='text-main-red'>20%</p>
                            </div>

                        </div>
                        <div className='text-white bg-main-orange rounded-md p-2 px-4 w-[140px]'>
                            <button>Connect Wallet</button>
                        </div>

                        <div>
                            <span className='text-main-red text-[20px] font-bold '>BECOME AN AFFILIATE $ EARN 7% AS COMMISSION</span>
                        </div>

                    </div>




                    <div id='right' className='border border-main-red flex flex-col gap-4 rounded-lg text-white w-[40%] h-[500px] justify-center items-center font-zcoolkuaile bg-black'>

                        <span className='text-main-red text-[20px] font-bold'>PRESALE 1</span>

                        <span>1 Saviour = 0.657 USTD</span>

                        <span>Next Stage Price = 0.732 USTD</span>

                        <span>Sold - $34,56,56,764$50,00,00,000</span>

                        <span>Sold - $34,56,56,764$40,00,00,00</span>

                        <input type="text" placeholder='Enter the ammount (BNB)' className='border border-main-red p-2 bg-black text-main-red w-[324px] rounded-full' />

                        <input type="text" placeholder='Minimum Quantity to Buy' className='border border-main-red p-2 bg-black text-main-red w-[324px] rounded-full' />

                        <input type="text" placeholder='Maximum Quantity of Tokens' className='border border-main-red p-2 bg-black text-main-red w-[324px] rounded-full' />

                        <div id='btn-div' className='flex justify-around gap-10'>
                            <div className='text-white bg-main-orange rounded-md p-2 px-4 '>
                                <button>Buy</button>
                            </div>
                            <div className='text-white bg-main-orange rounded-md p-2 px-4'>
                                <button>Claim Drop</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Ido