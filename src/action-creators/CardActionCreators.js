import CardAction from '../constants/CardAction'

const CardActionCreators = {
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