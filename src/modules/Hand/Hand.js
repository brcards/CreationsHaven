import React, {useState} from 'react';
import styled from "styled-components";
import PlayerCard from "/src/modules/PlayerCard/PlayerCard";

const HandContainer = styled.div`
    position: fixed;
    justify-content: center;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8em;
    padding: 0 5em;
    > * {
        // determines how close together the cards are
       margin: 0 -2.0em;
    }
`;

const Hand = () => {
    const [cards, setCards] = React.useState(
        [
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            },
            {
                "title": "test"
            }
        ]
    );

    return (
        <HandContainer>
            {cards.map((card, index) =>
                <PlayerCard key={index} index={index} handSize={cards.length}/>
            )}
        </HandContainer>
    );
};

export default Hand;
