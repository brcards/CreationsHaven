import React from 'react';
import Orb from "src/modules/Orb";
import styled from "styled-components";

const StyledOrb = styled(Orb)`
    background: #0018F9;
`;

const EnergyOrb = ({children, ...rest}) => {
    return (
        <StyledOrb {...rest}>
            {children}
        </StyledOrb>
    );
};

export default EnergyOrb;