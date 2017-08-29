import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import FlipCard from 'react-flipcard'
import CardState from '../constants/CardState'
import CardFaceUp from './CardFaceUp'
import CardFaceDown from './CardFaceDown'

import './Card.css'

/* Represents a flippable card.

The flipping animation starts when isFlipping and nextCardState props
are provided. This props change is triggered by the onFlipCardStart action.

The card will flip from current state to next state.

The onFlipCardCompleted action informs the store of the card state change after
a flip is completed. This action is delayed to allow time for the animation
to complete. */
class Card extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            wantedState: props.card.get('cardState')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.card.get('isFlipping') && nextProps.card.get('nextCardState') !== this.state.wantedState) {
            // change state to trigger the flip animation
            this.setState({
                 wantedState: nextProps.card.get('nextCardState')
            })
        }
    }
    
    render() {

        const handleOnFlip = (flipped) => {
            // give animation time to complete before firing flip completed event
            setTimeout(() => {
                this.props.onFlipCardCompleted(this.props.card.get('id'))
            },1000)
        }

        return (
            <div className="card">
                <FlipCard
                    disabled={ true }
                    flipped={ this.state.wantedState === CardState.FACE_UP ? true : false }
                    onFlip={ handleOnFlip } >
                        <div>
                            <CardFaceDown 
                                card = { this.props.card }
                                onFlipCardStart = { this.props.onFlipCardStart } />
                        </div>
                        <div>
                            <CardFaceUp
                                cardType = { this.props.card.get('type') } />
                        </div>
                </FlipCard>
            </div>
        )
    }
}

Card.propTypes = {
    card: ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        type: ImmutablePropTypes.contains({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }),
        faceDownImage: PropTypes.string.isRequired,
        faceUpImage: PropTypes.string.isRequired,
        cardState: PropTypes.string.isRequired
    }),
    onFlipCardStart: PropTypes.func.isRequired,
    onFlipCardCompleted: PropTypes.func.isRequired
}

export default Card
