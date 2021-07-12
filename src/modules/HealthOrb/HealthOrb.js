import React from 'react';
import Orb from "src/modules/Orb";
import styled from "styled-components";

const StyledOrb = styled(Orb)`
    background: #111111;
    background-clip: padding-box;
`;

const HealthOrb = ({children, ...rest}) => {
    return (
        <StyledOrb {...rest}>
            {children}
        </StyledOrb>
    );
};

export default HealthOrb;