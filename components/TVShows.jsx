import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/TVShows.css'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa";
const TVShows = () => {

    const [shows, setShows] = useState([])
    const [allShows, setAllShows] = useState([])
    

    const options = {
        method: 'GET',
        url: 'https://www.episodate.com/api/most-popular?page=1',
      };

      useEffect(() => {
        axios.request(options).then((response) => {
              setShows(response.data.tv_shows)
              setAllShows(response.data.tv_shows)
        }).catch(err => console.log(err))
  }, [])
  console.log(shows)


  const SearchTVShow = (e) => {
    const filteredData = allShows.filter(c => c.name.toLowerCase().includes(e.toLowerCase()))
    setShows(filteredData)
  }

  console.log(shows)
  return (
    <div>
        <div className='scroll-holder'>
        <div className='scroll-tray'>
          <div>{allShows.map((show, index) => (
            <img key={index} src={show.image_thumbnail_path} alt="" />
          ))}
          </div>
        </div>
      </div>
         <form  className="search-bar">
	<input type="search" name="search" placeholder='Search TV Shows...' onChange={e => SearchTVShow(e.target.value)} pattern=".*\S.*" required />
	<button className="search-btn" type="submit" >
		<span>Search</span>
	</button>
</form>
        <div  className="wrapper">
    {
      shows.map((show, index) => (
        <div className="wrapper1" key={index}>
        <div className="card">
                <img src={show.image_thumbnail_path}></img>
            <div className="descriptions">
                <h1>{show.name}</h1>
                <p>Country: {show.country}  <br/>
                  <span className='zhanri'>Start Date: {show.start_date}</span>
                  <br/>
                  <span className='zhanri'>Status: {show.status}</span>
                  </p>
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

export default TVShows

