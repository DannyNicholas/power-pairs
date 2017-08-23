import CardAction from '../constants/CardAction'

const CardActionCreators = {
    turnCard(id) {
       return {
           type: CardAction.TURN_CARD,
           id
       }
    },
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