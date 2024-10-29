import React from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";



const TitleCards = ({title, category}) =>{
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  const filteredData = cards_data.filter(item => {
    if (title === "Most Favorite") {
        return item.isFavorite;
    }
    return item.category === category;
  });

  return(
    <div className="titlecards">
      <div className="titlecards-header">
        <h1>{title?title:"Most Favorite"}</h1>
        <p>See All &gt;</p>
      </div>
      <div className="cards-list" ref={cardsRef}>
        {filteredData.map((card, index) => {
          return(
          <Link className="card" key={index} to={`/player/${card.trailer}`}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        )})}
      </div>
    </div>
  )
}

export default TitleCards