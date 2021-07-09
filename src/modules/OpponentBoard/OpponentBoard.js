import React from 'react';
import styled from "styled-components";
import Board from "src/modules/Board";

const StyleBoardSide = styled(Board)`
    position: absolute;
    left: 5%;
    top: 23%;
`;

const OpponentBoard = ({children, ...rest}) => {
    return (
        <StyleBoardSide {...rest}>
            {children}
        </StyleBoardSide>
    );
};

export default OpponentBoard;