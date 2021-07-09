import {createSlice} from "@reduxjs/toolkit";
import {PLAY_PLAYER_MINION} from "src/common/ActionTypes";
import {removeById} from "src/common/MutabilityHelper";

const playerHandSlice = createSlice({
    name: 'playerHand',
    initialState: {
        cards: [
            {
                id: 1,
                type: "minion",
                cost: 3,
                attack: 3,
                health: 3,
                title: "Predators Focus",
                text: "Double a minions attack this turn"
            },
            {
                id: 2,
                type: "minion",
                cost: 5,
                attack: 6,
                health: 4,
                title: "Bengal Tiger",
                text: ""
            },
            {
                id: 3,
                type: "minion",
                cost: 3,
                attack: 3,
                health: 3,
                title: "Predators Focus",
                text: "Double a minions attack this turn"
            }
        ]
    },
    reducers: {
        addCard: state => {
            // TODO
        }
    },
    extraReducers: {
        [PLAY_PLAYER_MINION]: (state, action) => {
            removeById(state.cards, action.payload.card.id);
            return state;
        }
    },
});

export default playerHandSlice.reducer;