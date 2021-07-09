import * as React from "react"
import {PlayerHandContainer} from "src/modules/PlayerHand";
import GameBoard from "src/modules/GameBoard";
import styled from "styled-components";
import PlayerBoardContainer from "src/modules/PlayerBoard/PlayerBoardContainer";
import OpponentHandContainer from "src/modules/OpponentHand/OpponentHandContainer";
import {OpponentBoardContainer} from "src/modules/OpponentBoard";
import PlayerHealthOrb from "src/modules/PlayerHealthOrb";
import PlayerEnergyOrb from "src/modules/PlayerEnergyOrb";
import OpponentHealthOrb from "src/modules/OpponentHealthOrb";
import OpponentEnergyOrb from "src/modules/OpponentEnergyOrb";

const Main = styled.main`
    font-size: 14px;
`;

// markup
const IndexPage = () => {
    return (
        <Main>
            <OpponentHandContainer />
            <GameBoard>
                <OpponentBoardContainer />
                <OpponentHealthOrb />
                <OpponentEnergyOrb />
                <PlayerBoardContainer />
                <PlayerHealthOrb />
                <PlayerEnergyOrb />
            </GameBoard>
            <PlayerHandContainer />
        </Main>
    )
};

export default IndexPage
