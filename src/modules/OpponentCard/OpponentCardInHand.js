import React from 'react';
import {CardInHand} from "src/modules/Hand";

const OpponentCardInHand = ({children, index, handSize, maxCards, cardState, ...rest}) => {
    return (
        <CardInHand index={index}
                    handSize={handSize}
                    maxCards={maxCards}
                    cardState={cardState}
                    {...rest}>
            {children}
        </CardInHand>
    );
};

export default OpponentCardInHand;