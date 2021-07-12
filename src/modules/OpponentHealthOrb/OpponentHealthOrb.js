import React from 'react';
import HealthOrb from "src/modules/HealthOrb";
import styled from "styled-components";

const StyledHealthOrb = styled(HealthOrb)`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    font-size: 2.5em;
    width: 6em;
    height: 6em;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -1em;
    z-index: 0;
`;

const Value = styled.div`
    position: absolute;
    color: #FFFFFF;
    bottom: 0.4em;
    width: 1em;
    left:  0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

const OpponentHealthOrb = ({...rest}) => {
    return (
        <Wrapper>
            <StyledHealthOrb {...rest} />
            <Value>
                20
            </Value>
        </Wrapper>
    );
};

export default OpponentHealthOrb;