import styled from "styled-components";
import {FlexCenter} from "src/common/Stylings";

const BoardSlot = styled.div`
    background-color: ${props => props.highlighted ? "#FFFFFF" : "#CCCCCC"};
    height: 90%;
    width: 15%;
    margin: 1.0% 0.5%;
    ${FlexCenter}
`;


export default BoardSlot;