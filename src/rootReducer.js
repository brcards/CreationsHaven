import playerBoardSlice from "src/modules/PlayerBoard/PlayerBoardReducer";
import playerHandSlice from "src/modules/PlayerHand/PlayerHandReducer";
import opponentHandSlice from "src/modules/OpponentHand/OpponentHandReducer";
import opponentBoardSlice from "src/modules/OpponentBoard/OpponentBoardReducer";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    playerHand: playerHandSlice,
    playerBoard: playerBoardSlice,
    opponentHand: opponentHandSlice,
    opponentBoard: opponentBoardSlice
});

export default rootReducer;
