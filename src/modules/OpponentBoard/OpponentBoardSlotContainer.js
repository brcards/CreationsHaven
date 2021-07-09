import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import BoardSlot from "src/modules/Board/BoardSlot";
import {setSlotRectangle} from "src/modules/OpponentBoard/OpponentBoardReducer";

const OpponentBoardSlotContainer = ({children, index, ...rest}) => {
    const dispatch = useDispatch();
    const slotRef = useRef(null);

    useEffect(() => {
        //TODO: update the rect when window size changes/ write test to make sure it does
        dispatch(setSlotRectangle({
            index: index,
            rect: slotRef.current.getBoundingClientRect()
        }));
    }, [slotRef]);

    return (
        <BoardSlot ref={slotRef} {...rest}>
            {children}
        </BoardSlot>
    );
};

export default OpponentBoardSlotContainer;