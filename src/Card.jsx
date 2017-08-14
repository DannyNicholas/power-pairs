import React from 'react'
import PropTypes from 'prop-types';

import CardState from './constants/CardState'

import './Card.css';

const Card = ( {card, onTurnCard} ) => {

    const CardFaceDown = () => {
        return (<img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg" alt="face-down" width="120" />)
    }

    const CardFaceUp = () => {
        return (<img src="http://www.pro-react.com/logos/redux-bank.svg" alt="face-up" width="120" />)
    }
    
    return (
        <div className="card">
            {card.get('cardState') === CardState.FACE_UP ?  <CardFaceUp /> : <CardFaceDown />}
            <button onClick={onTurnCard.bind(this, card.get('id'))}>Click</button>
        </div>
    )  
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        faceDownImage: PropTypes.string.isRequired,
        faceUpImage: PropTypes.string.isRequired,
        cardState: PropTypes.string.isRequired
    })
}

export default Card