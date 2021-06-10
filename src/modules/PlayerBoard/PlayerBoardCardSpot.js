import React from 'react';
import styled from "styled-components";
import {FlexCenter} from "src/common/Stylings";

const Spot = styled.div`
    background-color: #CCCCCC;
    height: 90%;
    width: 15%;
    margin: 1.0% 0.5%;
    ${FlexCenter}
`;

const PlayerBoardCardSpot = React.forwardRef(({children, ...rest}, ref) => {
    return (
        <Spot ref={ref} {...rest}>
            {children}
        </Spot>
    );
});

export default PlayerBoardCardSpot;