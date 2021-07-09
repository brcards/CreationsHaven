import React from 'react';
import styled, {css} from "styled-components";
import PlayerCardStates from "src/modules/PlayerCard/PlayerCardStates";
import Layers from "src/engine/Layers";
import {CardInHand} from "src/modules/Hand";

const CardFaceIdleCss = css`
    z-index: ${Layers.hands.zIndex};
`;

const CardFaceHoverCss = css`
    transform: translateY(-10em) rotate(0deg) scale(2);
    transition-duration: 0ms;
    z-index: ${Layers.action.zIndex};
`;

const CardFaceDragCss = css`
    transform: rotate(0deg) scale(1.2);
    transition-duration: 0ms;
    z-index: ${Layers.action.zIndex};
`;

const GetStyleFromState = (state) => {
    switch (state) {
        case PlayerCardStates.dragging:
            return CardFaceDragCss;
        case PlayerCardStates.hovering:
            return CardFaceHoverCss;
        default:
            return CardFaceIdleCss;
    }
};

const StyledPlayerCardFace = styled(CardInHand)`
    transition: 800ms cubic-bezier(0.19, 1, 0.22, 1) transform;
    ${props => GetStyleFromState(props.cardState)}
`;

const PlayerCardInHand = ({children, index, handSize, maxCards, cardState, ...rest }) => {
    return (
        <StyledPlayerCardFace index={index}
                        handSize={handSize}
                        maxCards={maxCards}
                        cardState={cardState}
                        {...rest}>
            {children}
        </StyledPlayerCardFace>
    );
};

export default PlayerCardInHand;

