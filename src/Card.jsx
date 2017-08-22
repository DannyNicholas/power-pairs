import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import FlipCard from 'react-flipcard'
import CardState from './constants/CardState'
import CardType from './constants/CardType'

import './Card.css'


class Card extends React.Component {
    
    constructor() {
        super()
        this.state = { isFlipped: false }
    }
    
    render() {

        const CardFaceDown = () => {
            return (
                <img
                    src={CardType.REVERSE.image}
                    alt={CardType.REVERSE.name}
                    width="200"
                    height="250"
                    onClick={showFront}
                    //onClick={this.props.onTurnCard.bind(this, this.props.card.get('id'))}
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
                    onClick={showBack}
                    //onClick={this.props.onTurnCard.bind(this, this.props.card.get('id'))}
                />
            )
        }

        const handleOnFlip = (flipped) => {

            setTimeout(() => {
                const logState = flipped ? "FACE UP" : "FACE DOWN"
                console.log(this.props.card.get('id') + " flipped to " + logState)
            },600)
            //console.log(flipped)
            if (flipped) {
                //this.refs.backButton.focus();
            }
        }

        const showFront = () => {
            this.setState({
            isFlipped: true
            })
        }
        
        const showBack = () => {
            this.setState({
            isFlipped: false
            })
        }
    
        return (
            <div className="card">
                <FlipCard
                    disabled={ true }
                    flipped={ this.state.isFlipped }
                    onFlip={ handleOnFlip }>
                        <div>
                            <CardFaceDown />
                        </div>
                        <div>
                            <CardFaceUp />
                        </div>
                </FlipCard>
                {
                    //{card.get('cardState') === CardState.FACE_UP ?  <CardFaceUp /> : <CardFaceDown />}
                }
            </div>
        )
    }
}

Card.propTypes = {
    card: ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        type: PropTypes.object.isRequired,
        faceDownImage: PropTypes.string.isRequired,
        faceUpImage: PropTypes.string.isRequired,
        cardState: PropTypes.string.isRequired
    })
}

export default Card
