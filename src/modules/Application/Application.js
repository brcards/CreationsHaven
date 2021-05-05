import React from 'react';
import 'normalize.css';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: radial-gradient(#333333, #111111);
        overflow: hidden;
        width: 100vw;
        height: 100vh;
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
