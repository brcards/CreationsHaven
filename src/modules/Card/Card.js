import React from 'react';
import styled from "styled-components";

const CardWrapper = styled.div`
    position: relative;
    height: 11em;
    width: 8em;
    cursor: none;
    user-select: none;
`;

const Card = ({children, ...rest}) => {
    return (
        <CardWrapper {...rest}>
            {children}
        </CardWrapper>
    );
};

export default Card;
