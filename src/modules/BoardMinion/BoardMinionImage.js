import React from 'react';
import styled from "styled-components";

const Image = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #111111;
    box-shadow: 0 0 5px #000000,
                inset 0 0 20px 5px #000000,;
    overflow: hidden;
    z-index: 2;
    
    // TODO should be in a "PlayerBoardMinion"
    transition: all .2s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 10px yellow;
    }
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

const BoardMinionImage = ({src, ...rest}) => {
    return (
        <Image {...rest} draggable="false">
            <Art src={src} />
            <ImageShadow />
        </Image>
    );
};

export default BoardMinionImage;