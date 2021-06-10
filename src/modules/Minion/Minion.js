import React from 'react';
import styled from "styled-components";
import MinionImage from "src/modules/Minion/MinionImage";
import CardSrc from "src/images/tigers_eye.png";
import MinionHealth from "src/modules/Minion/MinionHealth";
import MinionAttack from "src/modules/Minion/MinionAttack";

const MinionWrapper = styled.div`
    position: relative;
    height: 10em;
    width: 7.3em;
    user-select: none;
    z-index: 0;
    font-size: 1.2em;
`;

const Minion = ({card, ...remaining}) => {
    return (
        <MinionWrapper {...remaining}>
            <MinionImage src={CardSrc} />
            <MinionAttack>3</MinionAttack>
            <MinionHealth>3</MinionHealth>
        </MinionWrapper>
    );
};

export default Minion;