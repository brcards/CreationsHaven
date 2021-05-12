import React from "react";
import styled from "styled-components";
import CardAttribute from "/src/modules/Card/CardAttribute";

const Background = styled(CardAttribute)`
    position: absolute;
    height: 1.6em;
    width: 1.6em;
    left: -0.9em;
    top: -0.9em;
    background: #0018F9;
    border: 1px solid #111111;
    border-radius: 1px;
    box-shadow: 0 0 3px #000000;
    transform: rotate(45deg);
`;

const Text = styled.span`
    transform: rotate(-45deg);
`;

const CardCost = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            <Text>
                {children}
            </Text>
        </Background>
    );
};

export default CardCost;