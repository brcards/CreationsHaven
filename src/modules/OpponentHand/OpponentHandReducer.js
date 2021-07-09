import {createSlice} from "@reduxjs/toolkit";
import {PLAY_OPPONENT_MINION} from "src/common/ActionTypes";
import {removeById} from "src/common/MutabilityHelper";

const opponentHandSlice = createSlice({
    name: 'playerHand',
    initialState: {
        cards: [
            {"id": 1},
            {"id": 2},
            {"id": 3},
            {"id": 4},
            {"id": 5},
            {"id": 6},
            {"id": 7}
        ]
    },
    reducers: {
        addCard: state => {
            // TODO
        }
    },
    extraReducers: {
        [PLAY_OPPONENT_MINION]: (state, action) => {
            removeById(state.cards, action.payload.card.id);
            return state;
        }
    },
});


export default opponentHandSlice.reducer;