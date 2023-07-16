import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    color: #FFFFFF;
    height: 100%%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #111111;
    box-shadow: 0 0 5px #000000,
                inset 0 -10px 30px 5px #000000;
    overflow: hidden;
    z-index: 2;
`;

const Shadow = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const Orb = ({children, ...rest}) => {
    return (
        <Wrapper {...rest} draggable="false">
            {children}
            <Shadow />
        </Wrapper>
    );
};

export default Orb;