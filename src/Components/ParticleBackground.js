import React, { useEffect } from "react";
import Particles from "particles.js";

const ParticleBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: ["#00FF9D", "#00FFFF", "#FF00FF", "#FFA500", "#FFFFFF"],
          opacity: 0.5,
        },
        shape: {
          type: ["circle", "triangle", "star"],
          stroke: {
            width: 1,
            color: "#00FFFF",
            opacity: 0.3,
          },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.3,
            sync: false,
          },
        },
        size: {
          value: 6,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            size_min: 2,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00FFFF",
          opacity: 0.3,
          width: 1.5,
          shadow: {
            enable: true,
            color: "#00FFFF",
            blur: 5,
            opacity: 0.2,
          },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 1200,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 250,
            line_linked: {
              opacity: 0.5,
              color: "#FFFFFF",
            },
          },
          bubble: {
            distance: 250,
            size: 8,
            duration: 2,
            opacity: 0.6,
            speed: 2,
          },
          push: {
            particles_nb: 6,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "rgba(10, 11, 30, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "inset 0 0 100px rgba(0, 255, 157, 0.1)",
        pointerEvents: "auto",
      }}
    />
  );
};

export default ParticleBackground;
