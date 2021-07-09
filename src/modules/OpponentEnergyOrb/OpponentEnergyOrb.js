import React from 'react';
import styled from "styled-components";
import EnergyOrb from "src/modules/EnergyOrb";

const StyledEnergyOrb = styled(EnergyOrb)`
    font-size: 36px;
    width: 4.7em;
    height: 4.7em;
    position: absolute;
    top: -0.8em;
    left: -0.8em;
`;

const OpponentEnergyOrb = ({...rest}) => {
    return (
        <StyledEnergyOrb {...rest}>
            10
        </StyledEnergyOrb>
    );
};

export default OpponentEnergyOrb;