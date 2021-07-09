import React from 'react';
import styled from "styled-components";
import BoardMinionImage from "src/modules/BoardMinion/BoardMinionImage";
import CardSrc from "src/images/tigers_eye.png";
import BoardMinionHealth from "src/modules/BoardMinion/BoardMinionHealth";
import BoardMinionAttack from "src/modules/BoardMinion/BoardMinionAttack";

const MinionWrapper = styled.div`
    position: relative;
    height: 10em;
    width: 7.3em;
    user-select: none;
    z-index: 0;
    font-size: 1.2em;
`;

const BoardMinion = ({children, ...rest}) => {
    return (
        <MinionWrapper {...rest}>
            <BoardMinionImage src={CardSrc} />
            <BoardMinionAttack>3</BoardMinionAttack>
            <BoardMinionHealth>3</BoardMinionHealth>
        </MinionWrapper>
    );
};

export default BoardMinion;