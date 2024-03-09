import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { WallectConnect } from "./WalletConnect";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNavbar = () => {
        setNav(!nav);
    };

    const myStyle = {
        backgroundImage: `url(${`https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDdFYUddbSsGEf0QSGti5Cg7lidhL0R2bXjELhUwEV916o-VcdPwS4WGlXiVo9qRbeVI3Bzkd7UeRjP5H9AIK~2dP0Dgrk3NdfoH1J1y0hFrK~r2g67GPoeRFsfSacSshmfm8shplqeqcyN3yxsP6hS~--sP2BcGeipjELPJo80BHbFSoq1upwAdmGAFj3FJLzFnyzlP99VUPkeHEICy5Je4UrlDLGe9u6-lz8VNaqBNOam0v4G-uz6~yOZA4AB7U80FxFl9xKiNZorNk5fz9iSdHLJpBr3x06ROZHk~OSrjocloLBn4wljeDzUnMV1lAqbBej0ir~2TOrumoQzZ7w__`})`,
        height: "45rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <>
            <div style={myStyle}>
                <nav className="bg-cover bg-center zcool-kuaile">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex items-center">
                                <button
                                    onClick={toggleNavbar}
                                    className= " focus:bg-gray-700 focus:text-whitemr-2 rounded-md md:hidden inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none p-2"
                                >

                                    {nav ? (
                                        <FaTimes className="mt-10" />
                                    ) : (
                                        <FaBars className="mt-10" />
                                    )}
                                </button>

                                <div className="flex items-center mt-20 w-[50px]">
                                    <img className="w-13" src={logo} alt="Saviour Logo" />
                                    <span className="text-white text-lg font-zlogo mr-2 mb-6">
                                        Saviour
                                    </span>
                                </div>
                            </div>
                            <div className='text-white flex  w-[40%] border-none rounded-full p-2 bg-black mt-20 sm:hidden lg:inline lg:flex justify-between'>
                                <span>Home</span>
                                <span>IDO</span>
                                <span>Tokenomics</span>
                                <span>Roadmap</span>
                                <span>Coming soon </span>
                            </div>
                           <div className="mt-20">
                           <WallectConnect />
                           </div>
                        </div>
                    </div>
                    <div className={`${nav ? "block" : "hidden"} md:hidden`}>
                        <div className='text-white flex justify-between w-[40%] border-none rounded-lg p-2 mt-5 bg-black lg:hidden flex-col gap-2'>
                            <span>Home</span>
                            <span>IDO</span>
                            <span>Tokenomics</span>
                            <span>Roadmap</span>
                            <span>Coming soon </span>
                        </div>
                    </div>
                </nav>
                <div className="flex justify-center items-center">
                    <h1 className="text-center text-2xl lg:text-4xl text-white font-Shojumaru leading-tight lg:leading-tight lg:mb-4 sm:mt-10 sm:shadow-lg lg:shadow-none lg:mt-96 mt-20">
                        WHERE BLOCKCHAIN HEROES THRIVE, RESCUING
                        <span className="block font-normal">DREAMS, ELEVATING FORTUNES.</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Navbar;
