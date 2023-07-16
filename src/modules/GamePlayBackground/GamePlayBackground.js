import React, {useCallback, useState} from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styled from "styled-components";

const Container = styled.div`
    background: radial-gradient(#0A0B3A, #040020);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

const Btn = styled.button`
    position: fixed;
    left: 0;
    top: 50%;
`;

const GamePlayBackground = () => {
    const [stars, setStars] = useState(80);

    // trick get refresh the stars, just update state
    const refreshComponent = () =>{
        if(stars % 2 === 0) {
            return setStars(stars + 1);
        } else {
            return setStars(stars - 1);
        }
    };

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Container>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    name: "Link Triangles",
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: "#ffffff",
                            animation: {
                                enable: true,
                                speed: 20,
                                sync: true,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 3,
                            },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "random",
                            opacity: 0.4,
                            width: 1,
                            triangles: {
                                enable: false,
                                color: "#ffffff",
                                opacity: 0.1,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 2,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    background: {
                        color: "#000000",
                    },
                }}
            />
            {/*<Btn onClick={refreshComponent}>reset</Btn>*/}
        </Container>
    );
};

export default GamePlayBackground;