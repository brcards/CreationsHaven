import React from 'react';
import Draggable from 'react-draggable';
import PlayerCardStates from "/src/modules/PlayerCard/PlayerCardStates";
import PlayerCardFace from "/src/modules/PlayerCard/PlayerCardFace";
import Card from "/src/modules/Card";
import CardBackground from "/src/modules/Card/CardBackground";
import CardSrc from "/src/images/tigers_eye.png";
import CardCost from "/src/modules/Card/CardCost";
import CardText from "/src/modules/Card/CardText";
import CardAttack from "/src/modules/Card/CardAttack";
import CardHealth from "/src/modules/Card/CardHealth";
import CardImage from "/src/modules/Card/CardImage";
import CardTitle from "/src/modules/Card/CardTitle";


/**
 * Work around for draggable to prevent z index issue on hover
 *
 */
const DraggableFilter = ({style, children, filter, ...rest}) => {
    return (
        <div style={filter ? {} : style} {...rest}>
            {children}
        </div>
    );
};

const PlayerCard = ({cardData, children, index, handSize, maxCards = 10, ...rest}) => {

    const [position, setPosition] = React.useState({x: 0, y: 0});
    const [cardState, setCardState] = React.useState(PlayerCardStates.inHand);

    const onControlledDragStop = (e, position) => {
        setCardState(PlayerCardStates.inHand);
        setPosition({x : 0, y : 0});
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
        <Draggable onStop={onControlledDragStop} onStart={onControlledDragStart} position={position}>
            <DraggableFilter filter={cardState !== PlayerCardStates.dragging}>
                <Card onMouseEnter={() => handleOnHover(PlayerCardStates.hovering)}
                      onMouseLeave={() => handleOnHover(PlayerCardStates.inHand)}
                      cardState={cardState}>
                    <PlayerCardFace index={index} handSize={handSize} maxCards={maxCards} cardState={cardState}>
                        <CardBackground>
                            <CardCost>3</CardCost>
                            <CardImage src={CardSrc} />
                            <CardTitle>Predators Focus</CardTitle>
                            <CardText>
                                Double a minions attack this turn
                            </CardText>
                            <CardAttack>4</CardAttack>
                            <CardHealth>5</CardHealth>
                        </CardBackground>
                    </PlayerCardFace>
                </Card>
            </DraggableFilter>
        </Draggable>
    );
};

export default PlayerCard;
