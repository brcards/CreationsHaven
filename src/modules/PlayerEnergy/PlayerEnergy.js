import React from 'react';
import Energy from "src/modules/Energy";
import styled from "styled-components";

const EnergyContainer = styled.div`
    position: absolute;
    left: -1.4em;
    bottom: 0;
    > * {
        margin-top: 1.3em;
    }
`;

const PlayerEnergy = () => {
    return (
        <EnergyContainer>
            <Energy>6</Energy>
            <Energy>5</Energy>
            <Energy>4</Energy>
            <Energy>3</Energy>
            <Energy>2</Energy>
            <Energy>1</Energy>
        </EnergyContainer>
    );
};

export default PlayerEnergy;