import React from "react";
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow.png'
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Player = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const { trailer } = useParams();

  const handleBackClick = () => {
    console.log('Clicking back button');
    navigate('//', {
      state: { showModal: true },
      replace: true
    });
  };

  return(
    <div className="player">
      <img src={back_arrow_icon} alt="back" onClick={handleBackClick} className="back-icon"/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${trailer}`} title='trailer' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
    <div className="player-info">
      {/* <p>Published Date</p>
      <p>Name</p>
      <p>Type</p> */}
    </div>
    </div>
  )
}

export default Player