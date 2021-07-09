import styled from "styled-components";
import CardAttribute from "src/modules/Card/CardAttribute";
import Attack from "src/modules/Attack";

const BoardMinionAttack = styled(Attack)`
    left: 0.4em;
    bottom: 0.5em;
    ${CardAttribute}
`;

export default BoardMinionAttack;