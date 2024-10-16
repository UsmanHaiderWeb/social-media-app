import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Page5Content = (i) => {
    let contentCover = useRef()
    let contentContainer = useRef()

    useGSAP(() => {
        gsap.to(contentCover.current,{
            height: 0,
            scrollTrigger: {
                trigger: contentContainer.current,
                scroller: "body",
                start: "top 75%",
                end: "top 60%",
                scrub: true
            }
        })
    })


return (
    <div ref={contentContainer} className={`w-[85%] sm:w-[50%] flex justify-center items-center ${window.innerWidth < 800 && i.order}`}>
        <div className={`w-full relative flex justify-start items-start flex-col ${i.pl} sm:pr-[10%]`}>
            <h1 className='w-full text-[38px] font-extrabold leading-[43px]'>{i.skill}</h1>
            <p className='w-full text-[22px] leading-[27px] mt-5'>{i.des}</p>
            <div ref={contentCover} className='w-full h-full absolute bottom-0 left-0 bg-[#181818]'></div>
        </div>
    </div>
  )
}

export default Page5Content