import React, { Component } from 'react'
import GameStore from './GameStore'
import Card from './Card'
import CardAction from './constants/CardAction'

class GameContainer extends Component {
    constructor(...args) {
        super(...args)
        //GameStore.dispatch({type:'CREATE_ACCOUNT'})
        this.state = {
            card: GameStore.getState()
        }
    }

    componentDidMount() {
        this.unsubscribe = GameStore.subscribe(() => 
            this.setState({card: GameStore.getState()})
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return <Card
            card = { GameStore.getState().get('card') }
            onClick = { () => GameStore.dispatch(
                {type: CardAction.TURN_CARD}    
            )}
        />
    }
}

export default GameContainer