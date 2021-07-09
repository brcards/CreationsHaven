import React from 'react';
import styled from "styled-components";

const StyledHand = styled.div`
    justify-content: center;
    display: flex;
    height: 8em;
    padding: 0 5em;
    font-size: 1.3em;
    > * {
        // determines how close together the cards are
       margin: 0 -2.0em;
    };
`;

const Hand = ({children, ...rest}) => {
    return (
        <StyledHand {...rest}>
            {children}
        </StyledHand>
    );
};

export default Hand;
