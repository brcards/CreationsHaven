import React from 'react';
import styled from "styled-components";

const CardWrapper = styled.div`
    position: relative;
    height: 10em;
    width: 7.3em;
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
