import { fromJS } from 'immutable'
 
import CardState from '../constants/CardState'
import CardAction from '../constants/CardAction'

const initialState = fromJS({
    card: {
        category: 'normal',
        type: 'apple',
        faceDownImage: '',
        faceUpImage: '',
        cardState: CardState.FACE_DOWN
    }
})

const CardReducer = (state = initialState, action) => {
    console.log(state.get('card'), action)
    
    switch (action.type) {
        case CardAction.TURN_CARD:
            const newState = state.get('card').get('cardState') === CardState.FACE_DOWN ? CardState.FACE_UP : CardState.FACE_DOWN
            return state.setIn(['card', 'cardState'], newState)
           
        default:
            return state
    }
}

export default CardReducer