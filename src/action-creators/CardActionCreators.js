import CardAction from '../constants/CardAction'
import CardState from '../constants/CardState'

const CardActionCreators = {
 
    flipCardStart(id) {
       return function(dispatch) {
            dispatch(actions.flipCardStart(id))
       }
    },

    flipCardCompleted(id) { 
        const visibleCards = (cards) => {
            return cards
                .filter(
                    card => (card.get('cardState') === CardState.FACE_UP))
        }

        return function(dispatch, getState) {
            dispatch(actions.flipCardCompleted(id))

             // if 2 are visible revert them to face-down
            const faceUpCards = visibleCards(getState().get('cards'))
            if (faceUpCards.count() === 2) {
                console.warn("2 cards have been flipped. Revert them.")
                faceUpCards.forEach(card => {
                    dispatch(actions.flipCardStart(card.get('id')))
                })
            }
        }
    }
}

const actions = {
    flipCardStart(id) {
        return {
            type: CardAction.FLIP_CARD_START,
            id
        }
    },
    flipCardCompleted(id) {
        return {
            type: CardAction.FLIP_CARD_COMPLETED,
            id
        }
    }
}

export default CardActionCreators
