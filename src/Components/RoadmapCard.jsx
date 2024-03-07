import React from 'react'

const RoadmapCard = (image, phase, content) => {
    return (
        <div className='bg-gradient-to-tl w-[200px] relative flex flex-col gap-10 border border-black h-[250px]'>
            <img src={image} alt="" className='w-full h-full object-cover absolute mix-blend-overlay blur-sm' />
            <span className='text-white'>PHASE{phase}</span>

            <span className='text-white'>{content}</span>

        </div>
    )
}

export default RoadmapCard