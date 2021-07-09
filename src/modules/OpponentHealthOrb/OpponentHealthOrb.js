import React from 'react';
import HealthOrb from "src/modules/HealthOrb";
import styled from "styled-components";

const StyledHealthOrb = styled(HealthOrb)`
    font-size: 36px;
    width: 4.7em;
    height: 4.7em;
    position: absolute;
    top: -0.8em;
    right: -0.8em;
`;

const OpponentHealthOrb = ({...rest}) => {
    return (
        <StyledHealthOrb {...rest}>
            30
        </StyledHealthOrb>
    );
};

export default OpponentHealthOrb;