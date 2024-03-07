import React from 'react'
import img3 from "../assets/img3.png"
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
                <span className='text-main-red text-[20px] font-bold'>ROADMAP</span>
            </div>
            <div className='flex justify-around m-4'>
                {
                    roadmapData?.map((ele, ind) => (
                        // <RoadmapCard key={ind} {...ele} />

                        <div className='bg-gradient-to-tl w-[200px] relative flex flex-col gap-10 border h-[300px] border-main-red flex-end items-center p-2 rounded-2xl'>
                            <img src={ele.image} alt="" className='w-[100px]' />
                            <span className='text-white'>PHASE {ele.phase}</span>

                            <span className='text-white'>{ele.content}</span>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Roadmap