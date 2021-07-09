import React from 'react';
import Hand from "src/modules/Hand";
import styled from "styled-components";
import Layers from "src/engine/Layers";

const StyledHand = styled(Hand)`
    transform: rotate(180deg);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${Layers.hands.zIndex};
`;

const OpponentHand = ({children, ...rest}) => {
    return (
        <StyledHand {...rest}>
            {children}
        </StyledHand>
    );
};

export default OpponentHand;