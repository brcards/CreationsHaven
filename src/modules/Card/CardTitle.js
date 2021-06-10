import styled from "styled-components";
import {FlexCenter} from "src/common/Stylings";

//width: 104%;
//     left: -3.0%;
//     bottom: 34.0%;
const CardTitle = styled.div`
    position: absolute;
    font-size: 0.7em;
    height: 10%;
    width: 104%;
    left: -3.0%;
    bottom: 45.0%;
    background: #D6CCA9;
    border: 1px solid #111111;
    border-radius: 1px;
    box-shadow: 0 0 5px #000000;
    z-index: 4;
    ${FlexCenter}
    text-align:center;
`;

export default CardTitle;