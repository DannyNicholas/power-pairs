import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import CardReducer from '../reducers/CardReducer'

/* For Redux dev tools see... */
/* https://github.com/zalmoxisus/redux-devtools-extension#usage */
const composeEnhancers = composeWithDevTools({});

const GameStore = createStore(
    CardReducer,

    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default GameStore