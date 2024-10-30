import React, { useState } from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DetailsModal from '../DetailsModal/DetailsModal';
import {useModal} from '../../context/ModalContext'

const TitleCards = ({title, category}) =>{
  const cardsRef = useRef();

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  const location = useLocation();

  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalMounted(true);
    setIsModalVisible(true);
    sessionStorage.setItem('selectedCard', JSON.stringify(card));
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setIsModalMounted(false);
    setSelectedCard(null);
    sessionStorage.removeItem('selectedCard');
    sessionStorage.removeItem('modalShouldShow');
  }

  const handleHideModal = () => {
    setIsModalVisible(false);
  }

  useEffect(() => {
    const shouldShowModal = sessionStorage.getItem('modalShouldShow');
    const savedCard = sessionStorage.getItem('selectedCard');
    
    if (shouldShowModal && savedCard) {
      console.log('Restoring modal state');
      setSelectedCard(JSON.parse(savedCard));
      setIsModalVisible(true);
      setIsModalMounted(true);
      sessionStorage.removeItem('modalShouldShow');
    }
  }, [location.pathname]);


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
          // <Link className="card" key={index} to={`/player/${card.trailer}`}>
          //   <img src={card.image} alt={card.name} />
          //   <p>{card.name}</p>
          // </Link>
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} onClick={() => handleCardClick(card)}/>
            <p>{card.name}</p>
          </div>
        )})}
      </div>
      {isModalMounted && (
        <DetailsModal 
          onClose={handleCloseModal}
          onHide={handleHideModal}
          title={selectedCard?.name}
          description={selectedCard?.description}
          image={selectedCard?.image}
          episodeLinks={selectedCard?.episodeLinks}
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default TitleCards