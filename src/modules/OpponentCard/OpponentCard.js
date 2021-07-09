import React from 'react';
import OpponentCardInHand from "src/modules/OpponentCard/OpponentCardInHand";
import CardBack from "src/modules/CardBack";
import Card from "src/modules/Card";

const OpponentCard = ({index, handSize, maxCards = 10, ...rest}) => {
    return (
        <Card>
            <OpponentCardInHand index={index}
                                handSize={handSize}
                                maxCards={maxCards}
                                {...rest}>
                <CardBack />
            </OpponentCardInHand>
        </Card>
    );
};

export default OpponentCard;