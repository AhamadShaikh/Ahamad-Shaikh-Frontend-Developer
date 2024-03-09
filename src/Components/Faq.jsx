import React from 'react'
import img5 from "../assets/img5.png"

const Faq = () => {
    return (
        <div className='bg-black flex flex-col lg:flex-row justify-center items-center py-8 lg:py-16 px-4 lg:px-0'>
            <div className='lg:mr-8'>
                <img src={img5} alt="" className='w-full lg:w-[500px] h-auto' />
            </div>

            <div className='flex flex-col gap-4 lg:gap-2 items-center lg:items-start'>
                <div className='text-center lg:text-left'>
                    <span className='text-main-red text-[20px] font-bold'>FAQ</span>
                </div>
                <div className='flex flex-col gap-4 lg:gap-2 w-full lg:w-[500px]'>
                    <div className='border border-main-red h-[40px] flex justify-around items-center rounded-2xl'>
                        <span className='text-white'>1</span>
                        <span className='text-white'>WHY CHOOSE "SAVIOUR?"</span>
                    </div>
                    <div className='border border-main-red h-[40px] flex justify-around items-center rounded-2xl'>
                        <span className='text-white'>2</span>
                        <span className='text-white'>WHAT IS THE IDO DURATION SO LONG?"</span>
                    </div>

                    <div className='border border-main-red h-[40px] flex justify-around items-center rounded-2xl'>
                        <span className='text-white'>3</span>
                        <span className='text-white'>WHEN WILL TRADING GO LIVE?"</span>
                    </div>

                    <div className='border border-main-red h-[40px] flex justify-around items-center rounded-2xl'>
                        <span className='text-white'>4</span>
                        <span className='text-white'>WHEN CAN WE CLAIM THE TOKENS?"</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
