import React, { useEffect, useRef } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.png'
const Navbar = () =>{

  const navRef = useRef();

  useEffect(()=>{
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150; // Adjust this value to change how much higher it stops
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return(
    <div className="navbar" ref={navRef}>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('most-favorite')}>Most Favorite</li>                
                <li onClick={() => scrollToSection('movies')}>Movies</li>   
                <li onClick={() => scrollToSection('series')}>Series</li>
                <li onClick={() => scrollToSection('comic')}>Comic</li>
                <li>Merchandise</li>            
            </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt="" className="icons" />
          <p>#R+18</p>
          <img src={bell_icon} alt="" className="icons" />
          <div className="navbar-profile">
            <img src={profile_img} alt="" className="profile"/>
            <img src={caret_icon} alt="" className="icons"/>
            <div className="dropdown">
              <p>Settings</p>
              <p>Logout</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Navbar