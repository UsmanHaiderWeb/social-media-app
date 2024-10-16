import React, { useRef } from 'react'
import Page5Counter from './Page5Counter'
import Page5Content from './Page5Content'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page5 = () => {
    const page5Line = useRef()
    const page5 = useRef()

    const CounterCon1 = useRef()
    const CounterCon2 = useRef()
    const CounterCon3 = useRef()
    const CounterCon4 = useRef()
    const CounterCon5 = useRef()
    const CounterCon6 = useRef()
    const CounterCon7 = useRef()


    useGSAP(() => {
        gsap.set(page5Line.current, {
            height: 0,
            display: 'none',
            opacity: 0
        })
        gsap.to(page5Line.current, {
            display: "block",
            opacity: 1,
            scrollTrigger: {
                trigger: page5.current,
                scroller: "body",
                start: "top 60%",
                end: "top 59%",
                scrub: true
            }
        })
        gsap.to(page5Line.current, {
            height: "90%",
            ease: "none",
            scrollTrigger: {
                trigger: page5.current,
                scroller: "body",
                start: "top 50%",
                end: "bottom 80%",
                scrub: 1
            }
        })
    })

return (
    <div ref={page5} className='pb-[100px] relative'>
        <h1 className='text-[55px] text-center mb-10 sm:mb-0'>Process</h1>
        <div className='relative sm:pl-0 lgtab:pl-[100px] tablet:pl-[80px] mini:pl-[64px] mobile:pl-[50px] micro:pl-[40px] sm:pt-6'>
            <div ref={page5Line} className='w-[3px] bg-[#DDFF37] absolute top-[4%] lgtab:left-[50px] tablet:left-[40px] mini:left-[32px] mobile:left-[25px] micro:left-[15px] sm:left-[50%] sm:translate-x-[-50%] pointer-events-none z-[10]'>
                <div className='absolute bottom-0 left-0 translate-x-[-45%] translate-y-[100%] border-[3px] border-solid border-[#DDFF37] w-6 h-6 rounded-full'></div>
            </div>
            <div ref={CounterCon1} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Counter order="order-1" counter="1" CounterCon={CounterCon1}/>
                <Page5Content order="order-2" pl="sm:pl-[8vw]" skill="UX Design" des="Once the research phase is done, it's time to bring what we have learned into a customer journey by creating a site map and a wireframe to start structuring the page in a way that will talk to your audience"/>
            </div>
            <div ref={CounterCon2} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Content order="order-2" pl="sm:pl-[6vw]" skill="UI Design" des="Once we understand the website's structure, it's time to make it look good. I will create a layout that engages the eye with micro-interaction that triggers the attention to essential areas of the website."/>
                <Page5Counter order="order-1" counter="2" CounterCon={CounterCon2}/>
            </div>
            <div ref={CounterCon3} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Counter order="order-1" counter="3" CounterCon={CounterCon3}/>
                <Page5Content order="order-2" pl="sm:pl-[8vw]" skill="Prototyping" des="Once the UI design is complete, I will map it to a high-fidelity prototype that feels like a website. That way, users can have the best experience browsing the website when they test the prototype."/>
            </div>
            <div ref={CounterCon4} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Content order="order-2" pl="sm:pl-[6vw]" skill="User Testing" des="Now we will find a pool of targeting users that will test the website to get some feedback and modify the design when necessary." />
                <Page5Counter order="order-1" counter="4" CounterCon={CounterCon4}/>
            </div>
            <div ref={CounterCon5} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Counter order="order-1" counter="5" CounterCon={CounterCon5}/>
                <Page5Content order="order-2" pl="sm:pl-[8vw]" skill="Webflow Development" des="Now it is time to make the UI of the website come to life. I will reproduce the design identically on Webflow. All my Webflow sites are responsive, clean, and fast, with an adaptive design."/>
            </div>
            <div ref={CounterCon6} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Content order="order-2" pl="sm:pl-[6vw]" skill="UX Research" des="I will conduct UX research to better understand the needs and preferences of your target audience and use that information to optimize the design and functionality of your product."/>
                <Page5Counter order="order-1" counter="6" CounterCon={CounterCon6}/>
            </div>
            <div ref={CounterCon7} className='pb-[120px] sm:pb-[100px] md:pb-[50px] lg:pb-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                <Page5Counter order="order-1" counter="7" CounterCon={CounterCon7}/>
                <Page5Content order="order-2" pl="sm:pl-[8vw]" skill="Technical SEO" des="Once the website is ready, I will improve the technical SEO aspect of the website. Then, finally, I will make search engines crawl your site and love it."/>
            </div>
        </div>
    </div>
  )
}

export default Page5