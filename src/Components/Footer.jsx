import React from 'react'
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

const Footer = () => {
    return (
        <div className='bg-black flex flex-col justify-center items-center gap-4'>
            <div>
                <img src={logo} alt="" width={'100px'} />
            </div>
            <div className='bg-black'>
                <span className='text-main-red text-[20px] font-bold'>SITEMAP</span>
            </div>
            <div className='text-white flex justify-between w-[50%] p-2 bg-black'>
                <span>Home</span>
                <span>IDO</span>
                <span>Tokenomics</span>
                <span>Roadmap</span>
                <span>Coming soon </span>
            </div>

            <div className='flex justify-center mt-4'>
                <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-main-orange w-[40px] h-[40px]'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-main-orange w-[40px] h-[40px]'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-main-orange w-[40px] h-[40px]'>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </div>
    )
}

export default Footer