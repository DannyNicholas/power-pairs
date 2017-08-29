import { fromJS } from 'immutable'
import CardReducer from './CardReducer'
import CardState from '../constants/CardState'
import CardAction from '../constants/CardAction'

// selecton of cards to use in tests
const initialState = fromJS({
    cards: [
        // face-down card
        {
            id: 1,
            cardState: CardState.FACE_DOWN
        },
        // face-up card
        {
            id: 2,
            cardState: CardState.FACE_UP
        },
        // face-down card flipping to face-up
        {
            id: 3,
            cardState: CardState.FACE_DOWN,
            nextCardState: CardState.FACE_UP,
            isFlipping: true
        },
        // face-up card flipping to face-down
        {
            id: 4,
            cardState: CardState.FACE_UP,
            nextCardState: CardState.FACE_DOWN,
            isFlipping: true
        }
    ]
})

const startFlipAction = (id) => {
    return {
        type: CardAction.FLIP_CARD_START,
        id
    }
}

const completeFlipAction = (id) => {
    return {
        type: CardAction.FLIP_CARD_COMPLETED,
        id
    }
}

const getCard = (cards, id) => {
    const index = cards.findIndex(card => card.get('id') === id)
    return cards.get(index)
}



describe('Card flip actions to reducer', () => {
    it('starts card flipping from down to up', () => {

        const newState = CardReducer(initialState, startFlipAction(1))

        // assert new card state
        const newCard = getCard(newState.get('cards'), 1)
        expect(newCard.get('cardState')).toEqual(CardState.FACE_DOWN)
        expect(newCard.get('nextCardState')).toEqual(CardState.FACE_UP)
        expect(newCard.get('isFlipping')).toEqual(true)
    })

    it('starts card flipping from up to down', () => {

        const newState = CardReducer(initialState, startFlipAction(2))

        // assert new card state
        const newCard = getCard(newState.get('cards'), 2)
        expect(newCard.get('cardState')).toEqual(CardState.FACE_UP)
        expect(newCard.get('nextCardState')).toEqual(CardState.FACE_DOWN)
        expect(newCard.get('isFlipping')).toEqual(true)
    })

    it('completes card flipping from down to up', () => {

        const newState = CardReducer(initialState, completeFlipAction(3))

        // assert new card state
        const newCard = getCard(newState.get('cards'), 3)
        expect(newCard.get('cardState')).toEqual(CardState.FACE_UP)
        expect(newCard.get('nextCardState')).toNotExist
        expect(newCard.get('isFlipping')).toNotExist
    })

    it('completes card flipping from up to down', () => {

        const newState = CardReducer(initialState, completeFlipAction(4))

        // assert new card state
        const newCard = getCard(newState.get('cards'), 4)
        expect(newCard.get('cardState')).toEqual(CardState.FACE_DOWN)
        expect(newCard.get('nextCardState')).toNotExist
        expect(newCard.get('isFlipping')).toNotExist
    })
})