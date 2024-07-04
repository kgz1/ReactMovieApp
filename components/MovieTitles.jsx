import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MovieTitles.css'
import { Link } from 'react-router-dom'
import '../components/trailers.js'
import trailers from '../components/trailers.js'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa";


const MovieTitles = () => {

  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const trailerss = trailers;

  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/movies',
    headers: {
      'x-rapidapi-key':  import.meta.env.VITE_SOME_KEY,
      'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
  };
      useEffect(() => {
            axios.request(options).then((response) => {
                  setMovies(response.data.movies)
                  setAllMovies(response.data.movies)
            }).catch(err => console.log(err))
      }, [])
console.log(movies)

const SearchMovie = (e) => {
  const filteredData = allMovies.filter(c => c.original_title.toLowerCase().includes(e.toLowerCase()))
  setMovies(filteredData)
}

  return (
    <div>
      <div className='scroll-holder'>
        <div className='scroll-tray'>
          <div>{allMovies.map((movie, index) => (
            <img key={index} src={movie.poster_path} alt="" />
          ))}
          </div>
        </div>
      </div>
   <form  className="search-bar">
	<input type="search" name="search" placeholder='Search movies...' pattern=".*\S.*" required onChange={e => SearchMovie(e.target.value)}/>
	<button className="search-btn" type="submit" >
		<span>Search</span>
	</button>
</form>
        <div  className="wrapper">
    {
      movies.map((movie, index) => (
        <div className="wrapper1" key={index}>
        <div className="card">
                <img src={movie.poster_path}></img>
            <div className="descriptions">
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}  <br/>
                  <p className='zhanri'>Genres: {movie.genres} <br/><br/> Release Date: {movie.release_date}</p>
                  </p>
                            <button>
                          <Link className='span' key={index} to={trailerss[index].link}>Play Trailer on YouTube</Link>
                          </button>
            </div>
        </div>
    </div>
      ))
    }
    </div>
    <footer class="footer-distributed">
<div class="footer-left">
  <h3>FilmaWeb<span>KG</span></h3>
  <p class="footer-links">
    <a href="#">Home</a>
    ·
    <a href="#">Contact</a>
    ·
    <a href="#">About us</a>
    ·
    <a href="#">Sitemap</a>
  </p>
  <p class="footer-company-name">Copyright &copy; 2024 FilmaWebKG All Right Reserved</p>
  <div class="footer-icons">
    <a href="#"><FaGithub /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaLinkedin /></a>
    <a href="#"><FaInstagram /></a>
  </div>
</div>
<div class="footer-right">
  <p>Contact us</p>
  <form action="#" method="post">
    <input type="text" name="email" placeholder="Email" />
    <textarea name="message" placeholder="Message"></textarea>
    <button>Send</button>
  </form>
</div>
</footer>
	 </div>
  )
}

export default MovieTitles
