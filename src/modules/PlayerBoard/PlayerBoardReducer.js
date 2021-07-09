import {createSlice} from "@reduxjs/toolkit";
import {PLAY_PLAYER_MINION} from "src/common/ActionTypes";

/**
 * State management for the players hand, rectangle is the bounding rect
 * for the DOM object of the spot. It's stored here so it can be used throughout
 * components
 */
const playerBoardSlice = createSlice({
    name: 'playerBoard',
    initialState: {
        slots: [
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
            {
                highlighted: false,
                rect: {},
                card: {}
            },
        ]
    },
    reducers: {
        removeMinion: (state, action) => {
            state.value += 1
        },
        addMinion: (state, action) => {
            state.value -= 1
        },
        setSlotRectangle: (state, action) => {
            state.slots[action.payload.index].rect = action.payload.rect;
        },
        setSlotHighlighted: (state, action) => {
            for(let slot of state.slots){
                slot.highlighted = false;
            }
            state.slots[action.payload.index].highlighted = action.payload.highlighted;
        },
        unhighlightSlots: (state) => {
            for(let slot of state.slots){
                slot.highlighted = false;
            }
        }
    },
    extraReducers: {
        [PLAY_PLAYER_MINION]: (state, action) => {
            state.slots[action.payload.slotIndex].card = action.payload.card;
            state.slots[action.payload.slotIndex].highlighted = false;
            return state;
        }
    },
});

export const {
    addMinion,
    removeMinion,
    setSlotRectangle,
    setSlotHighlighted,
    unhighlightSlots
} = playerBoardSlice.actions;
export default playerBoardSlice.reducer;