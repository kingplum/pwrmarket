'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import slide1 from '../../../public/images/slide/slide1.png';
import slide2 from '../../../public/images/slide/slide2.png';
import slide3 from '../../../public/images/slide/slide3.png';
import slide4 from '../../../public/images/slide/slide4.png';
import slide5 from '../../../public/images/slide/slide5.png';
import slide7 from '../../../public/images/slide7.png';

import map from '../../../public/images/map2.svg'

export type Props = {
    isAbout?: boolean,
    isDeals?: boolean,
    isreward?: boolean
}

export const Banner: React.FC<Props> = ({ isAbout, isDeals, isreward }) => {
    const slideImages = [slide1, slide2, slide3, slide4, slide5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1));
        }, 8000);

        return () => clearInterval(interval);
    }, [slideImages.length]);
    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className='w-full h-[500px] max-md:h-[264px] relative overflow-hidden mt-[120px] flex justify-center'>

            {!isAbout && !isDeals && !isreward && slideImages.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image src={slide} alt={`Slide ${index + 1}`} layout='fill' objectFit='cover' />
                </div>
            ))}
            {isAbout &&
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity`}
                >
                    <Image src={slide1} alt='image' objectFit='cover' className="w-full h-full" />
                </div>
            }
            {isDeals &&
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity`}
                >
                    <Image src={slide3} alt='image' objectFit='cover' className="w-full h-full" />
                </div>
            }
            {isreward &&
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity`}
                >
                    <Image src={slide7} alt='image' objectFit='cover' className="w-full h-full" />
                </div>
            }

            <div className="w-[90%] max-w-[1120px] flex items-center h-full">
                <div className="w-[510px] h-[230px] max-md:h-[154px] max-md:w-[90%] z-20 bg-gray-500 bg-opacity-40 rounded-[24px] p-[32px] max-md:p-4 flex justify-between flex-wrap backdrop-blur-[10px]">
                    {isAbout ?
                        <div className="text-[36px] max-md:text-[20px] font-bold text-white pt-5 max-md:pt-2">About Power Market</div> :
                        isDeals ?
                            <div className="w-full text-[36px] max-md:text-[20px] font-bold text-white pt-5 max-md:pt-2">Everyday Deals!</div>
                            :
                            isreward ?
                                <div className="w-full text-[36px] max-md:text-[20px] font-bold text-white pt-5 max-md:pt-2">Power Market Rewards</div>
                                :
                                <div className="text-[36px] max-md:text-[20px] font-bold text-white">Everything You Need, Right Around the Corner!</div>


                    }
                    <button className="w-[180px] max-md:w-[60%] max-md:text-[12px] h-10 rounded-[16px] bg-[#75BE41]  text-white font-semibold flex items-center justify-center gap-2">
                        <Image src={map} alt="icon" className=""></Image>
                        Find a Location
                    </button>
                </div>
            </div>
            {!isAbout && !isDeals && !isreward &&
                <div className="absolute bottom-4 flex gap-2">
                    {slideImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 rounded-full bg-white ${index === currentSlide ? 'w-[48px]' : 'w-2'}`}
                        />
                    ))}
                </div>
            }
        </div>
    );
}