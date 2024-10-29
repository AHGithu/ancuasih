import React from "react";
import './Home.css'
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import trailer_icon from '../../assets/trailer_icon.png'
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Home = () =>{
  const navigate = useNavigate();

  const handleTrailerClick = () => {
    navigate(`/player/YKJyP8L6QEs`);
  };

  return(
    
    <div className="home">
        <Navbar/>
        <section id="home">
        <div className="hero">
          <img src={hero_banner} alt="" className="banner-img" />
          
          <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img" />
            <p>The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.</p>
            
            <div className="hero-btns">
              <button className="btn"><img src={play_icon} alt="" /> Play</button>
              <button className="btn dark-btn" onClick={handleTrailerClick}>
                <img src={trailer_icon} alt="" /> Trailer
              </button>
            </div>
            
          </div>
        
        </div>
        <section id="most-favorite">
          <TitleCards title="Most Favorite"/>
        </section>
        <section id="movies">
          <TitleCards title="Movies" category="movies"/>
        </section>
        <section id="series">
          <TitleCards title="Series" category="series"/>
        </section>
        <section id="comics">
          <TitleCards title="Comics" category="comics"/>
        </section>
        <Footer/>
        </section>
    </div>
    
  )
}

export default Home