import React from 'react';
import OpponentHand from "src/modules/OpponentHand/OpponentHand";
import OpponentCard from "src/modules/OpponentCard";
import {useDispatch, useSelector} from "react-redux";

const selectCardsInHand = (state) => state.opponentHand.cards;

const OpponentHandContainer = ({...rest}) => {
    const dispatch = useDispatch();
    const cardsInHand = useSelector(selectCardsInHand);

    return (
        <OpponentHand {...rest}>
            {cardsInHand.map((card, index) =>
                <OpponentCard key={card.id}
                            index={index}
                            handSize={cardsInHand.length}/>
            )}
        </OpponentHand>
    );
};

export default OpponentHandContainer;