import React from 'react'
import Sidebar from './templates/Sidebar'
import Topnav from './templates/Topnav'

const Home = () => {
  return (
    <div className='w-full h-full flex'>
        <Sidebar />
        <div className="lg:w-[80%] md:w-[70%]">
            <Topnav />
        </div>
    </div>
  )
}

export default Home
