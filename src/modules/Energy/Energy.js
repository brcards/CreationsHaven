import React from 'react';
import Cost from "src/modules/Cost";
import styled from "styled-components";

const StyledEnergy = styled(Cost)`
    height: 2.2em;
    width: 2.2em;
`;

const Energy = ({children, ...rest}) => {
    return (
        <StyledEnergy {...rest}>
            {children}
        </StyledEnergy>
    );
};

export default Energy;