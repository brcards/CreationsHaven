import styled from "styled-components";
import {FlexCenter} from "src/common/Stylings";

const CardText = styled.div`
    position: absolute;
    font-size: 0.7em;
    height: 40%;
    width: 95%;
    left: 1.2%;
    bottom: 1.0%;
    background: #D6CCA9;
    border: 1px solid #111111;
    border-radius: 1px;
    box-shadow: 0 0 5px #000000;
    z-index: 1;
    ${FlexCenter}
    text-align:center;
`;

export default CardText;