import React from 'react';
import styled from "styled-components";

const HandContainer = styled.div`
    position: fixed;
    justify-content: center;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8em;
    padding: 0 5em;
    font-size: 1.2em;
    > * {
        // determines how close together the cards are
       margin: 0 -2.0em;
    }
`;

const Hand = ({children}) => {
    return (
        <HandContainer>
            {children}
        </HandContainer>
    );
};

export default Hand;
