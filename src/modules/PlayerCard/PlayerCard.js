import React from 'react';
import Draggable from 'react-draggable';
import PlayerCardStates from "src/modules/PlayerCard/PlayerCardStates";
import PlayerCardInHand from "src/modules/PlayerCard/PlayerCardInHand";
import Card from "src/modules/Card";
import CardBackground from "src/modules/Card/CardBackground";
import CardSrc from "src/images/tigers_eye.png";
import CardCost from "src/modules/Card/CardCost";
import CardText from "src/modules/Card/CardText";
import CardAttack from "src/modules/Card/CardAttack";
import CardHealth from "src/modules/Card/CardHealth";
import CardImage from "src/modules/Card/CardImage";
import CardTitle from "src/modules/Card/CardTitle";
import styled from "styled-components";

/**
 * Work around for draggable to prevent z index issue on hover,
 * by default draggable applies a z index to style which messes up
 * my z indexing. To work around just set style blank when not dragging
 */
const DraggableFilter = ({style, children, filter, ...rest}) => {
    return (
        <div style={filter ? {} : style} {...rest}>
            {children}
        </div>
    );
};

const StyledCard = styled(Card)`
    cursor: none;
`;

const PlayerCard = ({card, children, index, handSize, maxCards = 10, onRelease, onDrag, ...rest}) => {

    const [position, setPosition] = React.useState({x: 0, y: 0});
    const [cardState, setCardState] = React.useState(PlayerCardStates.inHand);

    const onControlledDragStop = (e, position) => {
        onRelease({ x: e.clientX, y: e.clientY }, card);
        setCardState(PlayerCardStates.inHand);
        setPosition({x: 0, y: 0});
    };

    const onControlledDragStart = (e, position) => {
        setCardState(PlayerCardStates.dragging);
    };

    const handleOnHover = (newCardState) => {
        if(cardState !== PlayerCardStates.dragging){
            setCardState(newCardState);
        }
    };

    return (
        <Draggable onStop={onControlledDragStop}
                   onDrag={(e, position) => onDrag({ x: e.clientX, y: e.clientY }, card)}
                   onStart={onControlledDragStart}
                   position={position}>
            <DraggableFilter filter={cardState !== PlayerCardStates.dragging}>
                <StyledCard onMouseEnter={() => handleOnHover(PlayerCardStates.hovering)}
                      onMouseLeave={() => handleOnHover(PlayerCardStates.inHand)}
                      cardState={cardState}
                      {...rest}>
                    <PlayerCardInHand index={index} handSize={handSize} maxCards={maxCards} cardState={cardState}>
                        <CardBackground>
                            <CardCost>{card.cost}</CardCost>
                            <CardImage src={CardSrc} />
                            <CardTitle>{card.title}</CardTitle>
                            <CardText>
                                {card.text}
                            </CardText>
                            <CardAttack>{card.attack}</CardAttack>
                            <CardHealth>{card.health}</CardHealth>
                        </CardBackground>
                    </PlayerCardInHand>
                </StyledCard>
            </DraggableFilter>
        </Draggable>
    );
};

export default PlayerCard;
