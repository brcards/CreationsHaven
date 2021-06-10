import {keyframes} from "styled-components";

// simple linear fade in
const Fade = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1.15);
    }
`;

export {
    Fade
}
