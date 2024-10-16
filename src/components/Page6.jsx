import React, { useRef } from 'react'
import page6_1 from '../assets/page6_1.webp'
import page6_2 from '../assets/page6_2.webp'
import page6_3 from '../assets/page6_3.webp'
import page6_4 from '../assets/page6_4.webp'
import page6_5 from '../assets/page6_5.webp'
import Page6IMGcontainer from './Page6IMGcontainer'

const Page6 = () => {


return (
    <div className='w-full pb-[200px] mini:pb-[175px] mobile:pb-[150px] micro:pb-[120px] mb-2'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
            <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center'>My <span className='font-medium text-[#DDFF37]'>Premium Webflow</span> Templates</h1>
            <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>Clean Premium Webflow templates that focus on conversion rates and makebusinesses look good.</p>
        </div>
        <div className='w-full flex justify-start items-start flex-col px-[4.2vw] micro:px-[10px]'>
            <Page6IMGcontainer imgPosition="left-0" img={page6_1} justify="justify-start" prizeName="Sequence" prize="$36" />
            <Page6IMGcontainer imgPosition={window.innerWidth >= 800 ? "left-0" : "right-0"} img={page6_2} justify={window.innerWidth >= 800 ? "justify-center" : "justify-end"} prizeName="Casa" prize="$256" />
            <Page6IMGcontainer imgPosition="left-0" img={page6_3} justify={window.innerWidth >= 800 ? "justify-end" : "justify-start"} prizeName="Artoral" prize="$23" />
            <Page6IMGcontainer imgPosition="right-0" img={page6_4} justify={window.innerWidth >= 800 ? "justify-center" : "justify-end"}  prizeName="Inka" prize="$73"/>
            <Page6IMGcontainer imgPosition={window.innerWidth >= 800 ? "right-0" : "left-0"} img={page6_5} justify="justify-start" prizeName="Odeel" prize="$80"/>
        </div>
    </div>
  )
}

export default Page6