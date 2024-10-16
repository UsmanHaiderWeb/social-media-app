import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page5Counter = (i) => {
    let count1 = useRef()
    let count2 = useRef()
    useGSAP(() => {
        gsap.set(count1.current, {
            y: 50,
            opacity: 0
        })
        gsap.set(count2.current, {
            y: 250,
            opacity: 0
        })
        function counterAnimation(a, b) {
            gsap.to(a, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: b,
                ease: "back.out",
                scrollTrigger: {
                    trigger: i.CounterCon.current,
                    scroller: "body",
                    start: "top 25%",
                    end: "top -100%",
                    toggleActions: "restart reverse restart reverse"
                }
            })
        }
        counterAnimation(count1.current, 0)
        counterAnimation(count2.current, 0.08)
    })
return (
    <div className={`w-full sm:w-[50%] flex justify-start sm:justify-center items-center sm:text-[25vw] text-[150px] mobile:text-[140px] micro:text-[140px] overflow-hidden ${window.innerWidth < 800 && i.order}`}>
        <span className="text-[#5937ff] hidden mini:block micro:block mobile:block">0</span>
        <span className="text-[#5937ff] hidden mini:block micro:block mobile:block">{i.counter}</span>
        <span ref={count1} className="text-[#5937ff] sm:text-transparent block mini:hidden micro:hidden mobile:hidden" style={{WebkitTextStroke: "2px #5937ff"}}>0</span>
        <span ref={count2} className="text-[#5937ff] sm:text-transparent block mini:hidden micro:hidden mobile:hidden" style={{WebkitTextStroke: "2px #5937ff"}}>{i.counter}</span>
    </div>
  )
}

export default Page5Counter