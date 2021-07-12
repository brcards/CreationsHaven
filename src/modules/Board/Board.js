import React from 'react';
import styled from "styled-components";

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 26%;
`;

const Board = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            {children}
        </Background>
    );
};

export default Board;