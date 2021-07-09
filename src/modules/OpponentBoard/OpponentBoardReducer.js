import {createSlice} from "@reduxjs/toolkit";
/**
 * State management for the opponents board, rectangle is the bounding rect
 * for the DOM object of the spot. It's stored here so it can be used throughout
 * components
 */
const opponentBoardSlice = createSlice({
    name: 'opponentBoard',
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
    },
});

export const {
    addMinion,
    removeMinion,
    setSlotRectangle,
    setSlotHighlighted,
    unhighlightSlots
} = opponentBoardSlice.actions;
export default opponentBoardSlice.reducer;