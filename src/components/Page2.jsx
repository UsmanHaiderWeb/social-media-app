import React from 'react'
import page2_1 from '../assets/page2_1.svg'
import page2_2 from '../assets/page2_2.svg'
import page2_3 from '../assets/page2_3.svg'
import page2_4 from '../assets/page2_4.svg'
import page2_5 from '../assets/page2_5.svg'
import page2_6 from '../assets/page2_6.svg'
import page2_7 from '../assets/page2_7.svg'
import page2_8 from '../assets/page2_8.svg'
import page2_9 from '../assets/page2_9.svg'
import Page2_svg from './Page2_svg'

const Page2 = () => {
    let imgSRCarray = [page2_1, page2_2, page2_3, page2_4, page2_5, page2_6, page2_7, page2_8, page2_9]

return (
    <div>
        <div className='w-[3px] mobile:w-[2px] micro:w-[1.5px] h-[200px] mobile:h-40 micro:h-32 bg-[#0C15C4] mx-auto'></div>
        <h1 className='md:w-full sm:w-[600px] lgtab:w-[600px] tablet:w-[80%] mini:w-[80%] mx-auto sm:text-[40px] sm:leading-[50px] lgtab:text-[40px] lgtab:leading-[50px] tablet:text-[35px] tablet:leading-[45px] mini:text-[35px] mini:leading-[45px] mobile:text-[35px] mobile:leading-[45px] micro:text-[35px] micro:leading-[45px] text-center font-extralight mt-16'>Empowering brillient company worldwide</h1>
        <div className='sm:w-[720px] lgtab:w-[600px] mini:w-[95%] mobile:w-[96%] micro:w-[97%] mx-auto flex sm:justify-start justify-center items-center gap-7 flex-wrap pt-10 pb-[200px]'>
            {imgSRCarray.map((src, index) => {
                return <Page2_svg src={src} key={index} />
            })}
        </div>
    </div>
  )
}

export default Page2