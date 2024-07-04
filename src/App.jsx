import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieTitles from '../components/MovieTitles'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TVShows from '../components/TVShows'
import LatestMovies from '../components/LatestMovies'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<MovieTitles/>}/>
      <Route path={'/shows'} element={<TVShows/>}/>
      <Route path={'/latestmovies'} element={<LatestMovies/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
