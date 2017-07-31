import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

import CardReducer from './reducers/CardReducer'

const GameStore = createStore(CardReducer, devToolsEnhancer())

export default GameStore