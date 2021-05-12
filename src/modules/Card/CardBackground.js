import React from 'react';
import styled from "styled-components";

// background-image: url(${CardBackgroundImage});
// background-repeat: no-repeat;
// background-size: 100%;
const Background = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: #000000;
    border: 1px solid #708F99;
    border-radius: 4px;
`;

const Inset = styled.div`
    position: absolute;
    height: 93%;
    width: 90%;
    top: 3%;
    left: 4.2%;
    background: #444444;
    border: 1px solid #708F99;
    border-radius: 3px;
`;

const CardBackground = ({children, ...rest}) => {
    return (
        <Background {...rest}>
            <Inset>
                {children}
            </Inset>
        </Background>
    );
};

export default CardBackground;
