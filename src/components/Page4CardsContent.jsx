import React from 'react'

const Page4CardsContent = (i) => {
  return (
    <>
        <h3 className='text-[28px] pt-[10px]'>{i.data.work}</h3>
        <p className='text-[21px] leading-[25px] py-[14px]'>{i.data.des}</p>
        <a href="#" className='flex justify-start items-center gap-x-[6px]'>
            <span className='text-[#DDFF37] text-[21px] inline-block'>Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DDFF37" className='w-[35px]'><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
        </a>
    </>
  )
}

export default Page4CardsContent