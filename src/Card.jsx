import React from 'react'
import PropTypes from 'prop-types';

import CardState from './constants/CardState'

import './Card.css';

const Card = ( {card, onClick} ) => {

    const CardFaceDown = () => {
        return (<img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg" alt="face-down" width="120" />)
    }

    const CardFaceUp = () => {
        return (<img src="http://www.pro-react.com/logos/redux-bank.svg" alt="face-up" width="120" />)
    }

    const handleTurnCard = () => {
        onClick();
    }
    
    return (
        <div className="card">
            {card.get('state') === CardState.FACE_UP ?  <CardFaceUp /> : <CardFaceDown />}
            <button onClick={handleTurnCard.bind(this)}>Click</button>
        </div>
    )  
}

Card.propTypes = {
    card: PropTypes.shape({
        category: PropTypes.string,
        type: PropTypes.string,
        faceDownImage: PropTypes.string,
        faceUpImage: PropTypes.string,
        state: PropTypes.string
    })
}

export default Card