import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardRow = ( {cards, ...otherProps} ) => {
    return (
        <div>
            {
                cards.map(card =>
                    <Card
                        key={card.get('id')}
                        card={card}
                        {...otherProps}
                    />
                )
            }
        </div>
    )
}

CardRow.propTypes = {
    cards: PropTypes.object.isRequired
}

export default CardRow