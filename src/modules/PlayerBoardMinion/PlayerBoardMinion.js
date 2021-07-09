import React from 'react';
import {BoardMinion} from "src/modules/BoardMinion";
import styled from "styled-components";
import CardSrc from "src/images/tigers_eye.png";
import BoardMinionAttack from "src/modules/BoardMinion/BoardMinionAttack";
import BoardMinionHealth from "src/modules/BoardMinion/BoardMinionHealth";
import PlayerBoardMinionImage from "src/modules/PlayerBoardMinion/PlayerBoardMinionImage";

const StyledMinion = styled(BoardMinion)`
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const PlayerBoardMinion = ({card, ...rest}) => {
    return (
        <StyledMinion card={card} {...rest} >
            <PlayerBoardMinionImage src={CardSrc} />
            <BoardMinionAttack>3</BoardMinionAttack>
            <BoardMinionHealth>3</BoardMinionHealth>
        </StyledMinion>
    );
};

export default PlayerBoardMinion;