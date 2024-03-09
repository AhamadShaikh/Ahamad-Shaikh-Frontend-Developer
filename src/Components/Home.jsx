import React from 'react'
import Navbar from './Navbar'
import img3 from "../assets/img3.png"

const Home = () => {
    return (
        <div className='w-full'>
            <div>
                <Navbar />
            </div>

            <div className='flex bg-black justify-center items-center flex-col sm:flex-col md:flex-col lg:flex-row py-8 px-4 sm:px-0 gap-4'>
                <div className='flex flex-col w-full sm:w-[30%] gap-6 sm:gap-8 leading-6 text-center sm:text-left'>
                    <span className='text-main-red text-[20px] font-bold'>INTRODUCTION</span>
                    <span className='text-white'>We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! Our mission is to empower everyone to share wealth and succeed.</span>
                    <span className='text-white'>Read more...</span>
                    <div class="shadow-xl"><button class="text-white bg-main-orange rounded-md p-2 px-4">Documents</button></div>
                </div>
                <div className='w-full sm:w-[60%] h-[300px] sm:h-auto'>
                    <img src={img3} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

        </div>
    )
}

export default Home