import menu1 from '../../../public/images/menu/menu1.png'
import menu2 from '../../../public/images/menu/menu2.png'
import menu3 from '../../../public/images/menu/menu3.png'
import menu4 from '../../../public/images/menu/menu4.png'
import menu5 from '../../../public/images/menu/menu5.png'
import menu6 from '../../../public/images/menu/menu6.png'
import menu7 from '../../../public/images/menu/menu7.png'
import menu8 from '../../../public/images/menu/menu8.png'


import Image from 'next/image'

export default function Menu() {
    const data = [
        {
            Image: menu1,
            text: 'Coffee'
        },
        {
            Image: menu2,
            text: 'Beverages'
        },
        {
            Image: menu3,
            text: 'Breakfast'
        },
        {
            Image: menu4,
            text: 'Lunch & Dinner'
        },
        {
            Image: menu5,
            text: 'Fresh Baked Goods'
        },
        {
            Image: menu6,
            text: 'Snacks'
        },
        {
            Image: menu7,
            text: 'Packed Beverages'
        },
        {
            Image: menu8,
            text: 'Health, Grocery & Ice'
        },

    ]
    return (
        <div className="w-full lg:h-[590px] bg-white py-[60px] flex justify-center">
            <div className="w-[90%] h-full max-w-[1120px] ">
                <div className="w-full text-center text-[#444444] text-[28px] font-semibold font-inter ">Our Menu</div>
                <div className="w-full lg-h-[412px] mt-[10px]  flex justify-center items-center flex-wrap gap-[40px]">
                    {data.map((item, idx) => (
                        <div key={idx} className="w-[22%] h-[45%] max-md:w-[40%] max-lg:pb-10 max-md:pb-6">
                            <div className=' w-full h-full flex justify-center items-center flex-wrap cursor-pointer'>
                                <Image src={item.Image} alt='iconmenu' className=''></Image>
                                <div className='text-center w-full text-[#444444] font-semibold text-[20px] max-md:text-[16px]'>{item.text}</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}