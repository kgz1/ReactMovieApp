import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../upcoming.jpg'
import '../components/LatestMovies.css'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa";


const LatestMovies = () => {

    const [newmovies, setNewMovies] = useState([])
    const [allnew, setAllNew] = useState([])

const options = {
    method: 'GET',
    url: 'https://newly-released-movies.p.rapidapi.com/movies',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_SOME_KEY,
      'x-rapidapi-host': 'newly-released-movies.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
          setNewMovies(response.data)
          setAllNew(response.data)
    }).catch(err => console.log(err))
}, [])
console.log(newmovies)

const SearchUpComing = (e) => {
  const filteredData = allnew.filter(c => c.title.toLowerCase().includes(e.toLowerCase()))
  setNewMovies(filteredData)
}

  return (
    <div>
        <form  className="search-bar">
	<input type="search" name="search" placeholder='Search Upcoming movies...' pattern=".*\S.*" required onChange={e => SearchUpComing(e.target.value)}/>
	<button className="search-btn" type="submit" >
		<span>Search</span>
	</button>
</form>
        <div  className="wrapper">
    {
      newmovies.map((movie, index) => (
        <div className="wrapper1" key={index}>
        <div className="card">
                <img src='../upcoming.jpg'></img>
            <div className="descriptions">
                <h1>{movie.title}</h1>
                <button>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
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

export default LatestMovies