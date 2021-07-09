import {
    PLAY_PLAYER_MINION
} from "src/common/ActionTypes";

export const playMinion = (card, slotIndex) => {
    return {
        type: PLAY_PLAYER_MINION,
        payload: {
            card: card,
            slotIndex: slotIndex
        }
    }
};