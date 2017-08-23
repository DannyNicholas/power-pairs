import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import FlipCard from 'react-flipcard'
import CardState from './constants/CardState'
import CardType from './constants/CardType'

import './Card.css'


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

        const CardFaceDown = () => {
            // disable click if card already started to flip
            const cardClick = this.props.card.get('isFlipping') ?
                {}
                :
                {onClick : this.props.onFlipCardStart.bind(this, this.props.card.get('id'))}

            return (
                <img
                    src={CardType.REVERSE.image}
                    alt={CardType.REVERSE.name}
                    width="200"
                    height="250"
                    {...cardClick}
                />
            )
        }

        const CardFaceUp = () => {
            return (
                <img
                    src={this.props.card.get('type').get('image')}
                    alt={this.props.card.get('type').get('name')}
                    width="200"
                    height="250"
                    onClick={this.props.onFlipCardStart.bind(this, this.props.card.get('id'))}
                />
            )
        }

        const handleOnFlip = (flipped) => {
            // give animation time to complete before firing flip completed event
            setTimeout(() => {
                this.props.onFlipCardCompleted(this.props.card.get('id'))
            },600)
        }

        return (
            <div className="card">
                <FlipCard
                    disabled={ true }
                    flipped={ this.state.wantedState === CardState.FACE_UP ? true : false }
                    onFlip={ handleOnFlip }>
                        <div>
                            <CardFaceDown />
                        </div>
                        <div>
                            <CardFaceUp />
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
