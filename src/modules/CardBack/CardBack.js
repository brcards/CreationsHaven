import React from 'react';
import styled from "styled-components";

const Background = styled.div`
    position: relative;
    height: 10em;
    width: 7.3em;
    user-select: none;
    background: #444444;
    border: 1px solid #708F99;
    border-radius: 3px;
`;

const CardBack = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            {children}
        </Background>
    );
};

export default CardBack;