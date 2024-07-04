import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     	<div className="container red topBotomBordersOut">
        <img src="../pixels.png" alt="#" className='pixel' />
  <Link to={'/'}>Movies</Link>
  <Link to={'/shows'}>TV Shows</Link>
  <Link to={'/latestmovies'}>Upcoming Movies</Link>
</div>
    </div>
  )
}

export default Navbar