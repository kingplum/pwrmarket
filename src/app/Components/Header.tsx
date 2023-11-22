'use client'
import Image from "next/image"
import Link from "next/link"
import Logo from '../../../public/images/logo.png'
import map from '../../../public/images/map.svg'
import menu from '../../../public/images/menuicon.svg'
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";


const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="w-full h-[120px] fixed top-0 left-0 right-0 flex flex-wrap z-30">
            <div className="w-full h-1/3 bg-[#EBEBEB] flex justify-center">
                <div className="h-full max-w-[1120px] w-[90%] flex justify-between text-[#444444] text-[14px] max-md:text-[12px] items-center">
                    <div className="cursor-pointer flex gap-3">
                        <Image src={map} alt={"icon"} />
                        <Link href={'/locations'}>Locations</Link>
                    </div>
                    <div className="flex gap-5">
                        <Link href={'/about'} className="cursor-pointer">About Us</Link>
                        <div className="cursor-pointer">Contact</div>
                    </div>
                </div>
            </div>

            <div className="w-full h-2/3  flex justify-center" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="h-full max-w-[1120px] w-[90%] flex justify-between items-center">
                    <div className="md:hidden cursor-pointer relative">
                        <Image src={menu} alt="menu" onClick={toggleMenu}></Image>
                        {/* {showMenu &&
                            <div onClick={toggleMenu} className="fixed top-0 left-0 right-0 bottom-0 z-10"></div>
                        } */}
                        {showMenu &&
                            <div className={`fixed top-[120px] left-0 w-[100vw] z-[50]  shadow-lg gap-3 px-[24px] py-5 font-semibold text-[12px] flex flex-col transform  transition-transform ease-in-out duration-300`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                                <Link href={'/deals'}>Deals</Link>
                                <Link href={'/'}>Rewards</Link>
                                <Link href={'/'}>Carwash</Link>
                                <Link href={'/'}>Papa Sal’s</Link>
                                <div onClick={toggleMenu} className=" absolute right-3 top-3 cursor-pointer">
                                    <IoClose size={20} />
                                </div>
                            </div>
                        }
                    </div>


                    <div className="flex gap-5 max-lg:w-[190px] max-md:w-[130px] ">
                        <Image src={Logo} alt="logo"></Image>

                    </div>
                    <div className="flex justify-between font-semibold text-[16px] w-[40%] max-lg:text-[14px] max-lg:w-[45%] max-md:hidden">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/deals'}>Deals</Link>
                        <Link href={'/rewards'}>Rewards</Link>
                        <Link href={'/'}>Carwash</Link>
                        <Link href={'/'}>Papa Sal’s</Link>
                    </div>
                    <button className="w-[175px] h-[35px] bg-[#75BE41] max-lg:w-[150px] rounded-[16px] text-white font-semibold text-[16px] max-lg:text-[14px] max-md:w-[130px] max-md:h-[30px] max-md:text-[12px]">Download our App</button>

                </div>
            </div>

        </div>
    )

}
export default Header