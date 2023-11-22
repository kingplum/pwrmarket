import phone from '../../../public/images/phone.png'
import google from '../../../public/images/downloalgg.png'
import app from '../../../public/images/dowloalapp.png'
import Image from 'next/image';


export default function Download() {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to bottom right, rgba(117, 190, 65, 1), rgba(0, 99, 169, 1))',
    };
    return (
        <div style={gradientStyle} className="w-full md:h-[430px] max-md:h-auto  md:mt-[60px] max-md:mt-6 max-lg:mt-10 max-md:py-6 flex justify-center">
            <div className="w-[90%] h-full max-w-[1120px] flex justify-center py-10 max-md:py-6">
                <div className="w-[650px] max-md:w-[90%] h-full flex justify-between max-md:items-center">
                    <div className='text-white flex items-center flex-wrap max-md:w-[60%]'>
                        <div>
                            <div className='text-[28px] font-semibold max-md:text-[20px]'>Download Our App</div>
                            <p className='w-[420px] max-md:w-full max-md:text-[12px] pt-3'>Save money at H&S Power Market stores with great coupons on gas, snacks, and more!</p>
                            <div className='flex justify-between pt-5 max-md:gap-5 max-md:pt-2 max-md:flex-col'>
                                <Image src={google} alt='google' className='w-[190px] h-[56px] max-md:w-[140px] max-md:h-10 cursor-pointer'></Image>
                                <Image src={app} alt='app' className='w-[190px] h-[56px] max-md:w-[140px] max-md:h-10 cursor-pointer'></Image>

                            </div>
                        </div>
                    </div>
                    <div className="w-[150px] h-full max-md:w-[85px] flex justify-center items-center">
                        <Image src={phone} alt='image'></Image>
                    </div>
                </div>
            </div>
        </div>

    )
}