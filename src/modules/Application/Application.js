import React from 'react';
import 'normalize.css';
import {createGlobalStyle} from "styled-components";
import {FlexCenter} from "/src/common/styles/Stylings";

const GlobalStyle = createGlobalStyle`
    body {
        //left 14px, right 16px
        font-size: 13px;
        transform-style: preserve-3d;
        perspective: 1000;
        background: radial-gradient(#333333, #111111);
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        ${FlexCenter}
    }
`;

const Application = ({children}) => {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    );
};

export default Application;
