import React from 'react'
import Home from '../Components/Home'
import Ido from '../Components/Ido'
import Tokenomics from '../Components/Tokenomics'
import Roadmap from '../Components/Roadmap'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div className='w-full'>
        <Home/>
        <Ido/>
        <Tokenomics/>
        <Roadmap/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HomePage