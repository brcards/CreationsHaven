import React from 'react';
import CardBackgroundImage from "/src/images/card_background.png"
import styled from "styled-components";

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${CardBackgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
`;

const CardBackground = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            {children}
        </Background>
    );
};

export default CardBackground;
