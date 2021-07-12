import React from 'react';
import Particles from "react-particles-js";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
    background: radial-gradient(#0A0B3A, #040020);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

const GamePlayBackground = () => {
    return (
        <StyledParticles
            width="100%"
            height="100%"
            params={{
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.02
                    },
                    "move": {
                        "random": true,
                        "speed": 0.3
                    },
                    "size": {
                        "value": 1.5
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
    );
};

export default GamePlayBackground;