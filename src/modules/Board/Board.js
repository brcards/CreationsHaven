import React from 'react';
import styled from "styled-components";

const Background = styled.div`
    height: 50rem;
    width: 80rem;
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
