import React from 'react'
import img5 from "../assets/img5.png"

const Faq = () => {
    return (
        <div className='bg-black flex justify-around items-center'>
            <div className=''>
                <img src={img5} alt="" className='w-[500px]' />
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <div className=''>
                    <span className='text-main-red text-[20px] font-bold'>FAQ</span>
                </div>
                <div className='flex justify-around border border-main-red w-[500px] h-[40px] items-center rounded-2xl'>
                    <span className='text-white'>1</span>
                    <span className='text-white'>WHY CHOOSE "SAVIOUR?"</span>
                </div>
                <div className='flex justify-around border border-main-red w-[500px] h-[40px] items-center rounded-2xl'>
                    <span className='text-white'>2</span>
                    <span className='text-white'>WHAT IS THE IDO DURATION SO LONG?"</span>
                </div>

                <div className='flex justify-around border border-main-red w-[500px] h-[40px] items-center rounded-2xl'>
                    <span className='text-white'>3</span>
                    <span className='text-white'>WHEN WILL TRADING GO LIVE?"</span>
                </div>

                <div className='flex justify-around border border-main-red w-[500px] h-[40px] items-center rounded-2xl'>
                    <span className='text-white'>4</span>
                    <span className='text-white'>WHEN CAN WE CLAIM THE TOKENS?"</span>
                </div>
            </div>
        </div>
    )
}

export default Faq