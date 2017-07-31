import { createStore } from 'redux'
import CardReducer from './reducers/CardReducer'

const GameStore = createStore(CardReducer)

export default GameStore