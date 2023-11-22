import logo from '../../../public/images/logo.png'
import facebook from '../../../public/images/facebook.svg'
import instagram from '../../../public/images/instagram.svg'

import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full lg:h-[260px] py-[60px] max-lg:py-10 max-md:py-6 flex justify-center">
            <div className="w-[90%] h-full max-w-[1220px] flex justify-between max-md:flex-wrap ">
                <div className=" w-[30%] max-lg:w-[245px] h-full flex flex-wrap justify-between max-md:w-full">
                    <div className='w-full h-[65px]  max-md:w-[70%] max-lg:h-10'>
                        <Image src={logo} alt='image'></Image>
                    </div>
                    <div className='text-[12px] text-[#444444] pt-4'>
                        <p>2860 N. Santiago Blvd, Orange, CA 92867</p>
                        <p>(714) 761-5426</p>
                        <p className='pt-1'>customerservice@hnsenergy.com</p>
                    </div>
                </div>

                <div className='w-[55%] max-lg:w-[60%] max-md:w-full h-full flex justify-between text-[#444444] max-md:mt-6 max-md:flex-wrap'>
                    <div className='max-md:w-1/2'>
                        <p className='text-[14px] font-semibold'>Company</p>
                        <p className='pt-4 text-[12px]'>Contact</p>
                        <p className='pt-1 text-[12px]'>About Us</p>
                        <p className='pt-1 text-[12px]'>Careers</p>
                    </div>

                    <div className='max-md:w-1/2'>
                        <p className='text-[14px] font-semibold'>Check us out</p>
                        <p className='pt-4 text-[12px]'>Locations</p>
                        <p className='pt-1 text-[12px]'>Deals</p>
                        <p className='pt-1 text-[12px]'>Rewards</p>
                        <p className='pt-1 text-[12px]'>Carwash</p>
                        <p className='pt-1 text-[12px]'>Papa Sal’s</p>
                    </div>

                    <div className='max-md:w-1/2 max-md:pt-6'>
                        <p className='text-[14px] font-semibold'>Legal</p>
                        <p className='pt-4 text-[12px]'>Terms & Conditions</p>
                        <p className='pt-1 text-[12px]'>Privacy & Policy Statement</p>
                        <p className='pt-1 text-[12px]'>Financial Incentive</p>
                        <p className='pt-1 text-[12px]'>CCPA</p>
                    </div>

                    <div className='max-md:w-1/2 max-md:pt-6'>
                        <div className='flex gap-4'>
                            <Image src={facebook} alt='icon'></Image>
                            <Image src={instagram} alt='icon'></Image>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}