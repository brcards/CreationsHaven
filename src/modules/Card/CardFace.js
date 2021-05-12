import React from 'react';
import styled from "styled-components";

/**
 * Get the y translation based on the position of the card in
 * the hand and number of cards in hand
 *
 * @param position
 * @param count
 * @returns {number}
 */
const getCardTranslation = (index, count) => {
    // non linear so it's rounded
    let dropoff = 3;
    return Math.pow(Math.abs(index - count/2), 2) * dropoff;
};

/**
 * Gets rotation for each card
 *
 * @param position      The position of the card from left to right starting at zero
 * @param count         Current number of cards in hand
 * @param max           Max hand size
 * @returns {number}
 */
const getCardRotation = (index, count, max) => {
    // should be
    let angle = 25;
    let offset = (angle * 2) / max;
    return -angle + (index + (max - count)/2) * offset;
};

const StyledCardFace = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;
    transform: translateY(${props => getCardTranslation(props.index, props.handSize)}px) 
               rotate3d(0, 0, 1, ${props => getCardRotation(props.index, props.handSize, props.maxCards)}deg);
`;

const CardFace = ({children, index, handSize, maxCards, cardState, ...rest }) => {
    return (
        <StyledCardFace index={index}
                        handSize={handSize}
                        maxCards={maxCards}
                        cardState={cardState}
                        {...rest}>
            {children}
        </StyledCardFace>
    );
};

export default CardFace;
