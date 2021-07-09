import React from 'react';
import OpponentBoard from "src/modules/OpponentBoard/OpponentBoard";
import {useSelector} from "react-redux";
import PlayerBoardSlotContainer from "src/modules/PlayerBoard/PlayerBoardSlotContainer";
import PlayerBoardMinion from "src/modules/PlayerBoardMinion";

const OpponentBoardContainer = () => {
    const cardSlots = useSelector((state) => state.opponentBoard.slots);

    return (
        <OpponentBoard>
            {cardSlots.map((cardSpot, index) =>
                <PlayerBoardSlotContainer index={index} key={index} highlighted={cardSpot.highlighted}>
                    {cardSpot.card.id !== undefined ? <PlayerBoardMinion /> : '' }
                </PlayerBoardSlotContainer>
            )}
        </OpponentBoard>
    );
};

export default OpponentBoardContainer;