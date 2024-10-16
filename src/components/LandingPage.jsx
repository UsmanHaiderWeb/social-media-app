import React, { useRef } from 'react'
import styles from './LandingPage.module.css'
import img1 from '../assets/landingpage1.webp'
import img2 from '../assets/landingpage2.webp'
import img3 from '../assets/landingpage3.webp'
import img4 from '../assets/landingpage4.webp'
import img5 from '../assets/landingpage5.webp'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'


const LandingPage = () => {
    gsap.registerPlugin(ScrollTrigger)
    const landingContentContainer = useRef()
    const imgRef1 = useRef()
    const imgRef2 = useRef()
    const imgRef3 = useRef()
    const imgRef4 = useRef()
    const imgRef5 = useRef()
    if (window.innerWidth >= 450) {
        useGSAP(() => {
            function animateLandinPageImages(a, b) {
                gsap.to(a, {
                    x: 0,
                    y: b,
                    rotate: 0,
                    duration: 10,
                    scrollTrigger: {
                        trigger: landingContentContainer.current,
                        scroller: "body",
                        start: "top -1%",
                        end: "top -75%",
                        scrub: 5
                    }
                })
            }
            animateLandinPageImages(imgRef1.current, 0)
            animateLandinPageImages(imgRef2.current, 70)
            animateLandinPageImages(imgRef3.current, 0)
            animateLandinPageImages(imgRef4.current, 70)
            animateLandinPageImages(imgRef5.current, 0)
        })
    }


return (
    <div ref={landingContentContainer} className='w-full min-h-screen overflow-hidden'>
        <div className='mt-20 mobile:mt-15 micro:mt-10 flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center gap-x-7 text-center mobile:flex-col micro:flex-col'>
                <div className={`${styles.workAvailable}`}>
                    <div className={`${styles.workAvailableCircle}`}></div>
                    <div className='text-[17px] mobile:text-[16px]'>Available for work</div>
                </div>
                <div className='text-[17px] mobile:text-[16px]'>My time is: &nbsp; 11:00 AM</div>
            </div>
            <h1 className='text-center md:w-[60%] sm:w-[700px] lgtab:w-[620px] tablet:w-[90%] mini:w-[95%] mobile:w-[90%] micro:w-[93%] md:text-[3.8vw] md:leading-[4vw] sm:text-[45px] sm:leading-[50px] lgtab:text-[40px] lgtab:leading-[45px] tablet:text-[40px] tablet:leading-[47px] mini:text-[40px] mini:leading-[47px] mobile:text-[38px] mobile:leading-[45px] micro:text-[35px] micro:leading-[43px] mx-auto my-6'>Crafting Seamless <span className='text-[#DDFF37]'>Digital Journeys</span> With UX/UI  and Webflow Excellence</h1>
            <p className='w-[400px] mobile:w-[85vw] micro:w-[90vw] md:w-[800px] sm:w-[600px] lgtab:w-[500px] mini:w-[65%] md:text-[22px] md:leading-[26px] sm:text-[20px] sm:leading-[24px] lgtab:text-[20px] lgtab:leading-[24px] mx-auto text-center mb-7'>I create human-centered websites that persuade and engage audiences in trusting your company.</p>
            <a href="#" className='request bg-[#DDFF37] py-[9px] px-7 mobile:px-[22px] micro:px-5 text-[20px] mobile:text-[19px] micro:text-[18px]'><button className='opacity-80 text-black'>See My Templates</button></a>
        </div>
        <div className='w-full py-[200px] flex justify-between items-center mobile:hidden micro:hidden'>
            <img src={img1} ref={imgRef1} className='sm:w-[18%] w-[30vw] tablet:w-[30vw] rounded-md sm:translate-y-[-350px] sm:translate-x-[-50px] sm:rotate-[-25deg] translate-y-[200px] translate-x-[450px] rotate-[-50deg]' />
            <img src={img2} ref={imgRef2} className='sm:w-[18%] w-[30vw] tablet:w-[30vw] rounded-md sm:translate-y-[-230px] sm:translate-x-[-150px] sm:rotate-[25deg] translate-y-[-200px] translate-x-[-450px] rotate-[50deg]' />
            <img src={img3} ref={imgRef3} className='sm:w-[18%] w-[30vw] tablet:w-[30vw] rounded-md translate-y-[-200px] translate-x-[450px] rotate-[50deg]' />
            <img src={img4} ref={imgRef4} className='hidden sm:block sm:w-[18%] rounded-md translate-y-[-230px] translate-x-[150px] rotate-[-25deg]' />
            <img src={img5} ref={imgRef5} className='hidden sm:block sm:w-[18%] rounded-md translate-y-[-320px] translate-x-[50px] rotate-[25deg]' />
        </div>
    </div>
  )
}

export default LandingPage