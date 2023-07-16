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
    @media screen and (min-width: 600px) {
        body {
            font-size: 8px;    
        }
    }
    @media screen and (min-width: 960px) {
        body {
            font-size: 10px;    
        }
    }
    @media screen and (min-width: 1280px) {
        body {
            font-size: 12px;    
        }
    }
    @media screen and (min-width: 1920px) {
        body {
            font-size: 15px;    
        }
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
