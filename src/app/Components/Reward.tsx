import image1 from '../../../public/images/reward.png'
import image2 from '../../../public/images/reward2.png'
import image3 from '../../../public/images/reward3.png'
import Image from 'next/image'


export default function Reward() {
    const data = [
        {
            image: image1,
            title: "We Make It Yours",
            text: 'Our foods, beverages, and healthy options are always fresh, delicious, and made for you.',
            button: 'View our menu'
        },
        {
            image: image2,
            title: "Get Power Market App",
            text: 'Download our app & Sign up for free Power Market membership.',
            button: 'Download'
        },
        {
            image: image3,
            title: "Redeem Your Rewards",
            text: 'Scan your barcode before you pay inside to earn and redeem rewards.',
            button: 'View rewards'
        },
    ]
    return (
        <div className="w-full ] py-[60px] flex justify-center">
            <div className="w-[90%] h-full max-w-[1120px] ">
                <div className="w-full text-center text-[#444444] font-semibold text-[28px]">Rewards</div>
                <div className="w-full md:h-[340px]  flex justify-between max-md:flex-wrap mt-6">
                    {data.map((item, idx) => (
                        <div key={idx} className="w-[30%] h-full bg-white max-md:w-full max-md:mb-6">
                            <Image src={item.image} alt='image' className='w-full h-[200px] max-lg:h-[156px]'></Image>
                            <div className='w-full text-center pt-4 text-[#444444] text-[20px] max-md:text-[16px] font-semibold'>{item.title}</div>
                            <div className='w-full text-center text-[#444444] text-[15px] pt-2 max-md:text-[12px]'>{item.text}</div>
                            <div className='w-full flex justify-center pt-2'>
                                <button className='px-4 h-[35px] rounded-[37px] text-white bg-[#0063A9] max-md:text-[12px]'>{item.button}</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )


}