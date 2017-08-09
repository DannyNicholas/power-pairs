import CardAction from '../constants/CardAction'

const CardActionCreators = {
    turnCard() {
       return {
           type: CardAction.TURN_CARD
       }
    }
}

export default CardActionCreators