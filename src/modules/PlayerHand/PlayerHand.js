import React from 'react';
import Hand from "src/modules/Hand";
import styled from "styled-components";

const StyledHand = styled(Hand)`
    position: fixed;
    bottom: -1em;
    left: 0;
    right: 0;
`;

const PlayerHand = ({children, ...rest}) => {
    return (
        <StyledHand {...rest}>
            {children}
        </StyledHand>
    );
};

export default PlayerHand;