import React from 'react';
import Hand from "src/modules/Hand";
import PlayerCard from "src/modules/PlayerCard/PlayerCard";

const PlayerHand = ({cardsInHand, onRelease}) => {
    return (
        <Hand>
            {cardsInHand.map((card, index) =>
                <PlayerCard key={card.id}
                            index={index}
                            handSize={cardsInHand.length}
                            onRelease={onRelease}/>
            )}
        </Hand>
    );
};

export default PlayerHand;