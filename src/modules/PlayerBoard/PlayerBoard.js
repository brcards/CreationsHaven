import React from 'react';
import styled from "styled-components";
import PlayerBoardCardSpot from "src/modules/PlayerBoard/PlayerBoardCardSpot";
import Minion from "src/modules/Minion/Minion";

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 26%;
    background-color: #DDDDDD;
    position: relative;
    left: 5%;
    top: 52%;
`;

const PlayerBoard = ({cardSpots}) => {
    return (
        <Background>
            {cardSpots.map((cardSpot, index) =>
                <PlayerBoardCardSpot ref={cardSpot.ref} key={index}>
                    {cardSpot.card.id !== undefined ? <Minion /> : '' }
                </PlayerBoardCardSpot>
            )}
        </Background>
    );
};

export default PlayerBoard;