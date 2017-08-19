import { connect } from 'react-redux'
import CardDeck from './CardDeck'
import CardActionCreators from './action-creators/CardActionCreators'

const mapStateToProps = (state) => {
    return {
        cards: state.get('cards')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTurnCard: (id) => dispatch(CardActionCreators.turnCard(id))
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(CardDeck)

export default GameContainer