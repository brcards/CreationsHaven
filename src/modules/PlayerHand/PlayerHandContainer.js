import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {playMinion} from "src/modules/Player/PlayerActions";
import PlayerHand from "src/modules/PlayerHand/PlayerHand";
import {isInsideRect} from "src/engine/GameMath";
import PlayerCard from "src/modules/PlayerCard/PlayerCard";
import {setSlotHighlighted, unhighlightSlots} from "src/modules/PlayerBoard/PlayerBoardReducer";

const selectCardsInHand = (state) => state.playerHand.cards;
const selectCardSlots = (state) => state.playerBoard.slots;

const PlayerHandContainer = () => {
    const dispatch = useDispatch();
    const cardsInHand = useSelector(selectCardsInHand);
    const cardSlots = useSelector(selectCardSlots);

    /**
     *  determine if a given x,y position is inside a card slot
     * slots should be ordered by their position on the screen from left to right
     *
     * @param position
     * @param slots
     * @returns {string|number} the index of the containing card slot, -1 otherwise
     */
    const findContainingCardSlot = (position, slots) => {
        for (const slotIndex in slots) {
            if (isInsideRect(position.x, position.y, slots[slotIndex].rect)) {
                return slotIndex;
            }
        }
        return -1;
    };

    const onCardRelease = (position, card) => {
        const playerCardSlot = findContainingCardSlot(position, cardSlots);
        if (playerCardSlot > -1 && cardSlots[playerCardSlot].card.id === undefined) {
            dispatch(playMinion(card, playerCardSlot));
        }
    };

    const onCardDrag = (position, card) => {
        const playerCardSlot = findContainingCardSlot(position, cardSlots);
        if (playerCardSlot > -1 && cardSlots[playerCardSlot].card.id === undefined) {
            dispatch(setSlotHighlighted({
                index: playerCardSlot,
                highlighted: true
            }));

        } else {
            dispatch(unhighlightSlots());
        }
    };

    return (
        <React.Fragment>
            <PlayerHand>
                {cardsInHand.map((card, index) =>
                    <PlayerCard key={card.id}
                                card={card}
                                index={index}
                                handSize={cardsInHand.length}
                                onRelease={onCardRelease}
                                onDrag={onCardDrag}/>
                )}
            </PlayerHand>
        </React.Fragment>
    );
};

export default PlayerHandContainer;