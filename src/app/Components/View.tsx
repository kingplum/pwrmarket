'use client'
import image1 from '../../../public/view/view1.png'
import image2 from '../../../public/view/view2.png'
import image3 from '../../../public/view/view3.png'
import image4 from '../../../public/view/view4.png'
import image5 from '../../../public/view/view5.png'
import image6 from '../../../public/view/view6.png'
import Image from 'next/image'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";
const data = [
    {
        id: 1,
        image: image1
    },
    {
        id: 2,
        image: image2
    },
    {
        id: 3,
        image: image3
    },
    {
        id: 4,
        image: image4
    },
    {
        id: 5,
        image: image5
    },
    {
        id: 6,
        image: image6
    },

]
interface Data {
    id: number,
    image: any
}

export default function View() {
    const [select, setSelect] = useState<Data>(data[0])

    const hanldeSelect = (data: Data) => {
        setSelect(data)
    }

    const settings = {
        dots: false, // Tắt nút tròn dưới carousel
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderRef = useRef<Slider>(null);

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };




    return (
        <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6">
            <div className="w-[90%] max-w-[880px] relative">
                <div className="w-full text-center pb-8 text-[#444444] text-[28px] font-semibold">Take A Look Around</div>
                <div className="w-full h-[495px] max-md:h-[264px] rounded-[16px] bg-slate-400 overflow-hidden transition-opacity relative max-md:hidden">
                    <Image src={select.image} alt='image' className="w-full h-full object-cover"></Image>
                </div>
                <div className="w-full pt-6 flex justify-between max-md:hidden">
                    {data.map((item) => (
                        <div key={item.id} className="w-[15%] h-[125px] rounded-[16px] cursor-pointer transition-transform transform hover:scale-105">
                            <Image onClick={() => hanldeSelect(item)} src={item.image} alt='image' className={`w-full h-full object-cover rounded-[16px] ${item.id === select.id && 'border-[5px] border-[#75BE41]'}`}></Image>
                        </div>
                    ))}
                </div>
                <div className="w-full mx-auto mt-8 relative md:hidden">
                    <Slider ref={sliderRef} dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                        {data.map((item) => (
                            <div key={item.id} className="w-full h-[300px]">
                                <Image
                                    src={item.image}
                                    alt={`image ${item.id}`}
                                    className="w-full h-full object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                                    onClick={() => console.log(`Clicked on image ${item.id}`)}
                                />
                            </div>
                        ))}
                    </Slider>
                    <button
                        onClick={goToPrev}
                        className="absolute w-10 h-10 flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-40 text-white p-2 rounded-full  focus:outline-none backdrop-blur-[10px]"
                    >
                        <IoChevronBackSharp size={20} />

                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute w-10 h-10 flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-40 text-white p-2 rounded-full  focus:outline-none backdrop-blur-[10px]"
                    >
                        <IoChevronForwardSharp size={20} />

                    </button>
                </div>

            </div>
        </div>
    )
}


