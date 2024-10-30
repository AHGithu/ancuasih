import React, { createContext, useState, useContext } from 'react';
import DetailsModal from '../components/DetailsModal/DetailsModal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalMounted, setIsModalMounted] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        sessionStorage.setItem('selectedCard', JSON.stringify(card));
        setSelectedCard(card);
        setIsModalMounted(true);
        setIsModalVisible(true);
    };

    return (
        <ModalContext.Provider value={{ 
            handleCardClick,
            isModalMounted,
            isModalVisible,
            selectedCard,
            setIsModalVisible,
            setIsModalMounted,
            setSelectedCard
        }}>
            {children}
            {isModalMounted && (
                <DetailsModal 
                    onClose={() => {
                        setIsModalMounted(false);
                        setIsModalVisible(false);
                        setSelectedCard(null);
                    }}
                    onHide={() => setIsModalVisible(false)}
                    title={selectedCard?.name}
                    description={selectedCard?.description}
                    image={selectedCard?.image}
                    episodeLinks={selectedCard?.episodeLinks}
                    isVisible={isModalVisible}
                />
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext); 