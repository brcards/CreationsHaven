import React from 'react';
import Energy from "src/modules/Energy";
import styled from "styled-components";

const EnergyContainer = styled.div`
    position: absolute;
    right: -1.4em;
    top: 0;
    > * {
        margin-bottom: 1.3em;
    }
`;

const OpponentEnergy = () => {
    return (
        <EnergyContainer>
            <Energy>1</Energy>
            <Energy>2</Energy>
            <Energy>3</Energy>
            <Energy>4</Energy>
            <Energy>5</Energy>
            <Energy>6</Energy>
        </EnergyContainer>
    );
};

export default OpponentEnergy;