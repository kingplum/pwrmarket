import Image from "next/image"
import image1 from '../../../public/images/water.png'
import image2 from '../../../public/images/buy.png'
export default function Buy() {
    return (
        <div className="w-full md:h-[450px] my-[60px] max-lg:my-[40px] max-md:my-6 bg-[#0063A9] flex justify-center">
            <div className="w-[90%] h-full max-w-[1120px] flex px-[60px] max-md:px-6 max-md:flex-wrap max-md:justify-center ">
                <div className="w-[50%] h-full max-lg:w-[60%] flex items-center max-md:w-full">
                    <Image src={image1} alt="image" className=""></Image>
                </div>
                <div className="w-[50%] max-lg:w-[40%] h-full flex justify-center items-center flex-col gap-6 max-md:w-[70%] max-md:pb-5">
                    <div className="w-[300px] h-[200px] max-lg:h-[150px] max-lg:w-full mt-[-30px] max-lg:mt-0 max-lg:pl-[50px] max-md:pl-0">
                        <Image src={image2} alt="image" className=""></Image>
                    </div>
                    <button className="w-[100px] h-[35px] rounded-[37px] bg-[#75BE41] text-white mt-6 max-lg:mt-0">Buy Now</button>
                </div>
            </div>

        </div>
    )

}