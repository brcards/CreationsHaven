import React from 'react';
import styled from "styled-components";
import PlayerCard from "/src/modules/PlayerCard/PlayerCard";

const HandContainer = styled.div`
    position: fixed;
    justify-content: center;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    padding: 0 50px;
    > * {
        // determines how close together the cards are
       margin: 0 -2.0em;
    }
`;

const cards = [
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
];

const Hand = () => {
    return (
        <HandContainer>
            {cards.map((card, index) =>
                <PlayerCard key={index} index={index} handSize={cards.length}/>
            )}
        </HandContainer>
    );
};

export default Hand;
