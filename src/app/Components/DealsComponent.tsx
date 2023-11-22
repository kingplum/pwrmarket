import Image from "next/image"
import image1 from '../../../public/images/deals/deal1.png'
import image2 from '../../../public/images/deals/deal2.png'
import image3 from '../../../public/images/deals/deal3.png'
import image4 from '../../../public/images/deals/deal4.png'
import image5 from '../../../public/images/deals/deal5.png'
import image6 from '../../../public/images/deals/deal6.png'
import image7 from '../../../public/images/deals/deal7.png'
import image8 from '../../../public/images/deals/deal8.png'
import image9 from '../../../public/images/deals/deal9.png'
import image10 from '../../../public/images/deals/deal10.png'
import image11 from '../../../public/images/deals/deal11.png'
import image12 from '../../../public/images/deals/deal12.png'

const data = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
]



export default function DealsComponent() {
    return (
        <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6">
            <div className="w-[90%] max-w-[1120px]">
                <div className="w-full text-center text-[#444444] text-[28px] font-semibold pb-8 max-md:pb-6 max-md:text-[20px]">Deals</div>
                <div className="w-full grid grid-cols-3 gap-8 max-md:gap-6 max-md:grid-cols-1 ">
                    {data.map((item, idx) => (
                        <Image key={idx} src={item} alt="image" className="rounded-[16px]"></Image>
                    ))}
                </div>
            </div>
        </div>
    )
}