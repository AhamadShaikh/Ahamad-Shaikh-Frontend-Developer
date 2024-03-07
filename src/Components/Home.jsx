import React from 'react'
import Navbar from './Navbar'
import img3 from "../assets/img3.png"

const Home = () => {
    return (
        <div className='w-full'>
            <div>
                <Navbar />
            </div>

            <div className='flex bg-black justify-center items-center'>
                <div className='flex flex-col w-[30%] gap-8 leading-6'>
                    <span className='text-main-red text-[20px] font-bold'>INTRODUCTION</span>
                    <span className='text-white'>We've all been in the mud once, and now we've decided to fight it out.
                        Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future!
                        Our mission is to empower everyone to share wealth and succeed.
                        read more...

                    </span>
                    <div class="shadow-xl"><button class="text-white bg-main-orange rounded-md p-2 px-4">Documents</button></div>
                    
                </div>
                <div className='w-[60%] h-[96]'>
                    <img src={img3} alt="" width={'100%'}/>
                </div>
            </div>
        </div>
    )
}

export default Home