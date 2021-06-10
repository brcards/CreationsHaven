import React from 'react';
import styled from "styled-components";

/**
 * height: 60em;
 * width: 92em;
 */
const Background = styled.div`
    position: relative;
    height: 60em;
    width: 92em;
    background: grey;
`;

const Board = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            {children}
        </Background>
    );
};


export default Board;
