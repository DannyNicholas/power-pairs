import CardAction from '../constants/CardAction'

const CardActionCreators = {
    flipCardStartOld(id) {
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
    },
    flipCardStart(id) {
         return function (dispatch) {
            const startFlipAction = {
                type: CardAction.FLIP_CARD_START,
                id
            }

            const completeFlipAction = {
                type: CardAction.FLIP_CARD_COMPLETED,
                id
            }

            dispatch(startFlipAction)
            // setTimeout(() => {
            //      dispatch(completeFlipAction)
            //     },600)
            setTimeout(() => {
                dispatch(startFlipAction)
            },2200)
        }
    }
}

export default CardActionCreators