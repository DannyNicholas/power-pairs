import { connect } from 'react-redux'
import Card from './Card'
import CardActionCreators from './action-creators/CardActionCreators'

const mapStateToProps = (state) => {
    return {
        card: state.get('card')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTurnCard: () => dispatch(CardActionCreators.turnCard())
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Card)

export default GameContainer