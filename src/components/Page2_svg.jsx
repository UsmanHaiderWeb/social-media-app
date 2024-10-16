import React from 'react'

const Page2_svg = (a) => {
  return (
    <div className='w-[220px] mini:w-[45%] mobile:w-[60%] micro:w-[70%] h-[90px] mobile:h-[100px] micro:h-[100px] flex justify-center items-center border-solid border-[1px] border-white border-opacity-30 py-7 px-[50px] rounded-lg'>
        <img src={a.src} className='w-full inline-block'/>
    </div>
  )
}

export default Page2_svg