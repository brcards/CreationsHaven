import React from 'react';
import styled from "styled-components";

const Image = styled.div`
    position: absolute;
    height: 80%;
    width: 90%;
    left: 5%;
    top: -15.0%;
    border-radius: 50%;
    border: 1px solid #111111;
    box-shadow: 0 0 5px #000000,
                inset 0 0 20px 5px #000000,;
    overflow: hidden;
    z-index: 2;
`;

const ImageShadow = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 5px 5px #000000;
`;

const Art = styled.img`
    display: block;
    height: 100%;
`;

const CardImage = ({src, ...rest}) => {
    return (
        <Image {...rest}>
            <Art src={src} />
            <ImageShadow />
        </Image>
    );
};

export default CardImage;