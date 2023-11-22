import Image from "next/image"
import image1 from '../../../public/images/story1.png'
import image2 from '../../../public/images/story2.png'
import image3 from '../../../public/images/story3.png'




export default function Story() {
    return (
        <div className="w-full py-[60px] max-lg:py-10 max-md:py-6 flex justify-center">
            <div className="w-[90%] h-full max-w-[1220px] bg-[#F1F9FF] text-[#444444] rounded-[16px]">
                <div className="pt-[32px] pb-6 text-[28px] max-md:pt-4 max-md:pb-4 max-md:text-[20px] font-semibold text-center">Our Story</div>
                <div className=" px-8 pb-8 max-md:px-4 max-md:pb-4">
                    <div className="md:flex gap-6 max-md:gap-4 max-md:flex-wrap">
                        <div className="w-1/2 h-[334px] max-md:w-full max-md:h-[258px]">
                            <Image src={image1} alt="image" className="w-full h-full"></Image>
                        </div>
                        <div className="w-1/2 md:h-[334px] flex justify-center items-center lg:pl-1 leading-7 max-md:leading-6 max-md:w-full">
                            <div className="text-[14px] max-md:pt-4">
                                <p>Looking for a store that offer convenience and grocery items at the same time?</p>
                                <p className="pt-8 max-md:pt-4">Look no further, we are <span className="font-semibold">  POWER MARKET</span>! - your neighborhood convenience store, with impeccable service and a wide selection of snacks, hot foods, drinks, grocery, and much more!</p>
                            </div>

                        </div>
                    </div>


                    <div className="flex gap-6 max-md:gap-4 pt-10 max-md:flex-wrap ">
                        <div className="w-1/2 md:h-[334px] md:flex justify-center md:items-center lg:pr-3 leading-7 max-md:leading-6 max-md:w-full max-md:order-2">
                            <div>
                                <p className="max-md:text-[14px]">We have locations everywhere that serve your community. Having built a reputation for being the most hygienic and clean store, our everyday-customers never have to worry about the quality of the products they buy. You can find any grocery item to restock your kitchen pantry and next party or you can just stop by for a quick snack and a refreshing drink.</p>
                            </div>

                        </div>
                        <div className="w-1/2 md:h-[334px] max-md:h-[258px] max-md:w-full max-md:order-1">
                            <Image src={image2} alt="image" className="w-full h-full"></Image>
                        </div>
                    </div>


                    <div className="md:flex gap-6 max-md:gap-4 pt-10 max-md:flex-wrap">
                        <div className="w-1/2 h-[334px] max-md:h-[258px] max-md:w-full">
                            <Image src={image3} alt="image" className="w-full h-full"></Image>
                        </div>
                        <div className="w-1/2 md:h-[334px] md:flex justify-center items-center lg:pl-1 md:leading-7 max-md:leading-6 max-md:w-full max-md:pt-4">
                            <div>
                                <p className="max-md:text-[14px]">Our staff is dedicated to ensure a smooth experience for out customers, day-in and day-out, and always ensure that all high-touch surfaces are thoroughly sanitized and that our customer’s high-demand and favorite products are well-stocked. Power through your life with<span className="font-semibold"> Power Market</span> where you will always find something to keep you going!</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}