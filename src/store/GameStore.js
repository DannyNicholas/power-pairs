import { createStore } from 'redux'
//import devToolsEnhancer from 'remote-redux-devtools'
import { devToolsEnhancer } from 'redux-devtools-extension';
import CardReducer from '../reducers/CardReducer'

const GameStore = createStore(
    CardReducer,

    /* For Redux dev tools see... */
    /* https://github.com/zalmoxisus/redux-devtools-extension#usage */
    devToolsEnhancer()
)

export default GameStore