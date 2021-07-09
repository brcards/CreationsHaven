import React from 'react';
import {useSelector} from "react-redux";
import PlayerBoardSlotContainer from "src/modules/PlayerBoard/PlayerBoardSlotContainer";
import PlayerBoardMinion from "src/modules/PlayerBoardMinion";
import PlayerBoard from "src/modules/PlayerBoard/PlayerBoard";

const selectCardSlots = (state) => state.playerBoard.slots;

const PlayerBoardContainer = () => {
    const cardSlots = useSelector(selectCardSlots);

    return (
        <PlayerBoard>
            {cardSlots.map((cardSpot, index) =>
                <PlayerBoardSlotContainer index={index} key={index} highlighted={cardSpot.highlighted}>
                    {cardSpot.card.id !== undefined ? <PlayerBoardMinion /> : '' }
                </PlayerBoardSlotContainer>
            )}
        </PlayerBoard>
    );
};

export default PlayerBoardContainer;