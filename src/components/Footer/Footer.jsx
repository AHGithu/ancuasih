import React from "react";
import './Footer.css'

const Footer = () =>{
  return(
    <div className="footer">
      <div className="footer-icons">
        <p>Support Us <br/> on Patreon</p>
        <img src="https://img.icons8.com/color/48/patreon.png" alt="patreon" />
        <p>Join Us <br/> on Discord</p>
        <img src="https://img.icons8.com/color/48/discord-logo.png" alt="discord" />
        <p>Follow Us <br/> on Twitter</p>
        <img src="https://img.icons8.com/color/48/twitter.png" alt="twitter" />
      </div>
      <p className="copyright">Copyright © 2024 Animaze Entertainment, Inc.</p>
    </div>
  )
}

export default Footer