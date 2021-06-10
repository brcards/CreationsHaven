import * as React from "react"
import PlayerHand from "src/modules/PlayerHand";
import Board from "src/modules/Board";
import PlayerBoard from "src/modules/PlayerBoard";
import {useRef} from "react";
import { cloneDeep } from 'lodash';
import styled from "styled-components";

const Main = styled.main`
    font-size: 14px;
`;

// markup
const IndexPage = () => {
    const [cardSpots, setCardSpots] = React.useState(
        [
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            },
            {
                ref: useRef(null),
                card: {}
            }
        ]
    );

    const [cardsInHand, setCardsInHand] = React.useState(
        [
            {
                "id": 1,
                "title": "test"
            },
            {
                "id": 2,
                "title": "test"
            },
            {
                "id": 3,
                "title": "test"
            },
            {
                "id": 4,
                "title": "test"
            },
            {
                "id": 5,
                "title": "test"
            },
            {
                "id": 6,
                "title": "test"
            },
            {
                "id": 7,
                "title": "test"
            },
            {
                "id": 8,
                "title": "test"
            },
            {
                "id": 9,
                "title": "test"
            },
            {
                "id": 10,
                "title": "test"
            }
        ]
    );

    const isInsideRect = (x, y, rect) => {
        if(x > rect.x && x < rect.right){
            if(y > rect.y && y < rect.bottom){
                return true;
            }
        }
        return false;
    };

    const addCardInSpot = (card, spotIndex) => {
        let newCardSpots = cloneDeep(cardSpots);
        newCardSpots[spotIndex].card = card;
        setCardSpots(newCardSpots);
    };

    const removeCardFromHand = (indexToRemove) => {
        let remainingCards = cardsInHand.filter((card, index) => {
            return index !== indexToRemove;
        });
        setCardsInHand(remainingCards);
    };

    const onCardRelease = (position, cardIndex) => {
        for (const spotIndex in cardSpots) {
            if(cardSpots[spotIndex].card.id !== undefined){
                continue;
            }
            let boundingRect = cardSpots[spotIndex].ref.current.getBoundingClientRect();
            if(isInsideRect(position.x, position.y, boundingRect)) {
                addCardInSpot(cloneDeep(cardsInHand[cardIndex]), spotIndex);
                removeCardFromHand(Number(cardIndex));
                break;
            }
        }
    };

    return (
        <Main>
            <Board>
                <PlayerBoard cardSpots={cardSpots}/>
            </Board>
            <PlayerHand cardsInHand={cardsInHand} onRelease={onCardRelease}/>
        </Main>
    )
};

export default IndexPage
