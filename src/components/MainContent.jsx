import React from 'react'
import LandingPage from './LandingPage'
import Page2 from './Page2'
// import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Footer from './Footer'

const MainContent = () => {
  return (
    <main className='w-full overflow-hidden'>
        <LandingPage />
        <Page2 />
        <Page6 />
        {/* <Page3 /> */}
        <Page4 />
        <Page5 />
        <Footer />
    </main>
  )
}

export default MainContent