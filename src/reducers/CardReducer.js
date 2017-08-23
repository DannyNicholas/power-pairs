import { fromJS } from 'immutable'
 
import CardState from '../constants/CardState'
import CardAction from '../constants/CardAction'
import CardType from '../constants/CardType'

const initialState = fromJS({
    cards: [
        {
            id: 1,
            category: 'normal',
            type: CardType.APPLE,
            faceDownImage: '',
            faceUpImage: `faceUpImg`,
            cardState: CardState.FACE_DOWN
        },
        {
            id: 2,
            category: 'normal',
            type: CardType.BANANA,
            faceDownImage: '',
            faceUpImage: './Playing_card_heart_10.svg',
            cardState: CardState.FACE_DOWN
        },
        {
            id: 3,
            category: 'normal',
            type: CardType.ORANGE,
            faceDownImage: '',
            faceUpImage: './Playing_card_heart_10.svg',
            cardState: CardState.FACE_DOWN
        },
        {
            id: 4,
            category: 'normal',
            type: CardType.APPLE,
            faceDownImage: '',
            faceUpImage: './Playing_card_heart_10.svg',
            cardState: CardState.FACE_DOWN
        }
    ]
})

const startCardFlip = (state, action) => {
    // find index of wanted card id
    const index = state.get('cards').findIndex(card => card.get('id') === action.id)
    
    // get card and add card's next state after being flipped
    const card = state.get('cards').get(index)
    const nextState = card.get('cardState') === CardState.FACE_DOWN ? CardState.FACE_UP : CardState.FACE_DOWN
    const newCard = card.set('nextCardState', nextState).set('isFlipping', true)

    // replace old card
    const newCards = state.get('cards').set(index, newCard)
    return state.set('cards', newCards)
}

const completeCardFlip = (state, action) => {
    // find index of wanted card id
    const index = state.get('cards').findIndex(card => card.get('id') === action.id)
    
    // get card and update card's state after being flipped
    // remove the temporary nextCardState and isFlipping keys
    const card = state.get('cards').get(index)
    const nextState = card.get('nextCardState')
    const newCard = card.set('cardState', nextState)
        .delete('nextCardState')
        .delete('isFlipping')

    // replace old card
    const newCards = state.get('cards').set(index, newCard)
    return state.set('cards', newCards)
}

const CardReducer = (state = initialState, action) => {
    
    console.log(action)

    switch (action.type) {
        case CardAction.FLIP_CARD_START:
            return startCardFlip(state, action)

        case CardAction.FLIP_CARD_COMPLETED:
            return completeCardFlip(state, action)
           
        default:
            return state
    }
}

export default CardReducer