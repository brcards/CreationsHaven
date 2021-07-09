import React from 'react';
import styled from "styled-components";
import EnergyOrb from "src/modules/EnergyOrb";

const StyledEnergyOrb = styled(EnergyOrb)`
    font-size: 36px;
    width: 4.7em;
    height: 4.7em;
    position: absolute;
    bottom: -0.8em;
    right: -0.8em;
`;

const PlayerEnergyOrb = ({...rest}) => {
    return (
        <StyledEnergyOrb {...rest}>
            10
        </StyledEnergyOrb>
    );
};

export default PlayerEnergyOrb;