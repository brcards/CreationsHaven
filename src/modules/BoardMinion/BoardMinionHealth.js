import styled from "styled-components";
import CardAttribute from "src/modules/Card/CardAttribute";
import Health from "src/modules/Health";

const BoardMinionHealth = styled(Health)`
    right: 0.4em;
    bottom: 0.5em;
    ${CardAttribute}
`;

export default BoardMinionHealth;