import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trendingnow from './components/Trendingnow'
import Popular from './components/Popular'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-800 text-white'>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/trending' element={<Trendingnow />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>
    </div>
  )
}

export default App
