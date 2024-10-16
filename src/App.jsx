import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#181818]'>
      <Header />
      <MainContent />
    </div>
  )
}

export default App