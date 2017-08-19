import CardAction from '../constants/CardAction'

const CardActionCreators = {
    turnCard(id) {
       return {
           type: CardAction.TURN_CARD,
           id
       }
    }
}

export default CardActionCreators