import React from 'react';
import close_icon from '../../assets/close_icon.png';
import './DetailsModal.css';
import play_icon from '../../assets/play_icon.png';
import trailer_icon from '../../assets/trailer_icon.png';
import last_icon from '../../assets/last_icon.png';
import { useNavigate } from 'react-router-dom';
const DetailsModal = ({onClose, onHide, title, description, image, episodeLinks, isVisible}) => {
    const navigate = useNavigate();

    const handleEpisodeClick = (link) => {
        const videoId = link.split('v=')[1];
        sessionStorage.setItem('modalShouldShow', 'true');
        navigate(`/player/${videoId}`);
        onHide();
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="details-modal">
                <img src={close_icon} alt="close" className='close-icon' onClick={onClose}/>
            <div className="details-modal-content">
                <img src={image} alt={title} className='details-modal-img'/>
                <div className="details-modal-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="details-modal-btns">
                    <button className='details-modal-btn-dark'><img src={trailer_icon} alt="trailer" />Trailer</button>
                    <button className='details-modal-btn'><img src={play_icon} alt="play" />Play First</button>
                    <button className='details-modal-btn'><img src={last_icon} alt="last" />Play Last</button>
                </div>
                <p>Episodes</p>
                <div className="episodes-container">
                    {episodeLinks && episodeLinks.length > 0 ? (
                        episodeLinks.map((link, index) => (
                            <button 
                                key={index}
                                className='details-modal-btn-eps'
                                onClick={() => handleEpisodeClick(link)}
                            >
                                {index + 1}
                            </button>
                        ))
                    ) : (
                        <div className="no-episodes-message">
                            <p>No episodes available yet</p>
                        </div>
                    )}
                </div>
                <p>Related Anime</p>
                <div className="related-anime">
                    <div className="no-episodes-message">
                        <p>No related anime available yet</p>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    );
};

export default DetailsModal;