import React from 'react';
import styled from "styled-components";
import BoardMinionImage from "src/modules/BoardMinion/BoardMinionImage";

const StyledBoardMinionImage = styled(BoardMinionImage)`
    transition: all .2s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 10px yellow;
    }
`;

const PlayerBoardMinionImage = ({...rest}) => {
    return (
        <StyledBoardMinionImage {...rest} />
    );
};

export default PlayerBoardMinionImage;