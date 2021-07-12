import * as React from "react"
import {PlayerHandContainer} from "src/modules/PlayerHand";
import GameBoard from "src/modules/GameBoard";
import styled from "styled-components";
import PlayerBoardContainer from "src/modules/PlayerBoard/PlayerBoardContainer";
import OpponentHandContainer from "src/modules/OpponentHand/OpponentHandContainer";
import {OpponentBoardContainer} from "src/modules/OpponentBoard";
import PlayerHealthOrb from "src/modules/PlayerHealthOrb";
import OpponentHealthOrb from "src/modules/OpponentHealthOrb";
import GamePlayBackground from "src/modules/GamePlayBackground";
import PlayerEnergy from "src/modules/PlayerEnergy";
import OpponentEnergy from "src/modules/OpponentEnergy";

const Main = styled.main`
`;

// markup
const IndexPage = () => {
    return (
        <Main>
            <GamePlayBackground />
            <OpponentHandContainer />
            <GameBoard>
                <OpponentBoardContainer />
                <OpponentHealthOrb />
                <OpponentEnergy />

                <PlayerBoardContainer />
                <PlayerHealthOrb />
                <PlayerEnergy />
            </GameBoard>
            <PlayerHandContainer />
        </Main>
    )
};

export default IndexPage
