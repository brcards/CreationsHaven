import React from 'react';
import HealthOrb from "src/modules/HealthOrb";
import styled from "styled-components";

const StyledHealthOrb = styled(HealthOrb)`
    font-size: 36px;
    width: 4.7em;
    height: 4.7em;
    position: absolute;
    bottom: -0.8em;
    left: -0.8em;
`;

const PlayerHealthOrb = ({...rest}) => {
    return (
        <StyledHealthOrb {...rest}>
            20
        </StyledHealthOrb>
    );
};

export default PlayerHealthOrb;