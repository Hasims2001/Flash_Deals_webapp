import Image from 'next/image'
import { ButtonFill } from '@/components/ButtonFill'
import Link from 'next/link'
import { memo } from 'react'
const Intro = ()=>{
    return (
        <div className='flex gap-4 my-8  items-center justify-evenly flex-col sm:flex-row'>
        <div className='py-8 flex flex-col gap-4'>
          <h2 className='text-2xl'>Limited Time Offers on
          <br></br> different E-commerce platform</h2>
          <h2 className='text-2xl font-bold'>Join our Telegram Channel</h2>
          <Link href={"https://t.me/FlashDealsFinder"} target='_black'>
            <ButtonFill typedValue='button' value='Join Now'></ButtonFill>
          </Link>
          <i>Stay connected for hot deals!</i>
        </div>  
        <div>
          <Image src={"/home_1.png"} alt='home image 1' width={250} height={250}  />
        </div>
        </div>
        
    )
}
export default memo(Intro)