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
        onFlipCardStart: (id) => dispatch(CardActionCreators.flipCardStart(id)),
        onFlipCardCompleted: (id) => dispatch(CardActionCreators.flipCardCompleted(id))
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(CardDeck)

export default GameContainer