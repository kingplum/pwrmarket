import Image from "next/image"
import image1 from '../../../public/images/career1.png'
import image2 from '../../../public/images/career2.png'


export default function Career() {
    return (
        <div className="w-full md:h-[300px] bg-[#F1F9FF] py-10 flex justify-center">
            <div className="w-[90%] max-w-[1120px] h-full">
                <div className="w-full text-center text-[#444444] text-[28px] font-semibold pb-3">Looking For A Career?</div>
                <div className="w-full md:h-[160px] flex max-md:flex-wrap ">
                    <div className="w-1/3 h-full max-md:hidden">
                        <Image src={image1} alt="image"></Image>
                    </div>
                    <div className="w-1/3 h-full px-[44px] flex justify-center items-center max-md:w-full max-md:order-2 max-md:pt-5">
                        <div className="flex flex-wrap justify-center gap-5">
                            <div className="w-full text-[18px]">Start Your Journey With Us</div>
                            <button className="w-[115px] h-[35px] rounded-[37px] bg-[#0063A9] text-white">Apply Now</button>
                        </div>

                    </div>
                    <div className="w-1/3 h-full max-md:w-full max-md:order-1">
                        <Image src={image2} alt="image"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}