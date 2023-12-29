import React, { useCallback } from 'react'
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesColorValues } from '../../../services/mocks/mocks';


const ParticlesContainer = () => {
      const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
  return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options= {{
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 300,
                        },
                    },
                    color: {
                        value: particlesColorValues,
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 2,
                            color: "none",
                        },
                        polygon: {
                            nb_sides: 10,
                        },
                        image: {
                        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                            width: 100,
                            height: 100,
                        },
                    },
                
                    opacity: {
                        value: 1,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 100,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 15,
                            size_min: 2,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 80,
                        color: "#808080",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 10,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: -1000,
                            rotateY: 1200,
                        },
                    },
                    },
                    interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 70,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                    },
                    },
                    retina_detect: true,
                }
            }
        />      
  )
}

export default ParticlesContainer