import React from 'react';
import img3 from "../assets/img3.png";
import RoadmapCard from './RoadmapCard';

const roadmapData = [
    {
        image: `${img3}`,
        phase: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        image: `${img3}`,
        phase: 2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        image: `${img3}`,
        phase: 3,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        image: `${img3}`,
        phase: 4,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
];

const Roadmap = () => {
    return (
        <div className='bg-black text-white text-center p-2'>
            <div className='bg-black'>
                <span className='text-main-red text-[30px] font-bold'>ROADMAP</span>
            </div>
            <div className='grid justify-center items-center gap-4 md:grid-col-4 lg:grid-cols-4'>
                {
                    roadmapData?.map((ele, ind) => (
                        <div key={ind} className='bg-gradient-to-tl w-[200px] relative flex flex-col gap-10 border h-[300px] border-main-red flex-end items-center p-2 rounded-2xl m-20 ' style={{ backgroundImage: `url(${ele.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <img src={ele.image} alt="" className='w-[100px]' style={{ visibility: 'hidden' }} />
                            <span className='text-white'>PHASE {ele.phase}</span>
                            <span className='text-white'>{ele.content}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Roadmap;
