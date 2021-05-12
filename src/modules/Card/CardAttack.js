import styled from "styled-components";
import CardAttribute from "/src/modules/Card/CardAttribute";

const CardAttack = styled(CardAttribute)`
    position: absolute;
    height: 1.8em;
    width: 1.8em;
    left: -0.9em;
    bottom: -0.9em;
    background: #D30000;
    border: 1px solid #111111;
    box-shadow: 0 0 3px #000000;
    border-radius: 50%;
`;

export default CardAttack;