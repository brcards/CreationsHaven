import React from 'react';
import 'normalize.css';
import {createGlobalStyle} from "styled-components";
import {FlexCenter} from "src/common/Stylings";
import { Provider } from 'react-redux'
import store from "src/store";

const GlobalStyle = createGlobalStyle`
    body {
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
            <Provider store={store}>
                <GlobalStyle />
                {children}
            </Provider>
        </div>
    );
};

export default Application;
