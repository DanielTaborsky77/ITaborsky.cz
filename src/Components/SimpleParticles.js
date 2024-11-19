import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const SimpleParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight) {
      setIsVisible(false);  // Skryje částice, pokud uživatel přejde nad první stránku
    } else {
      setIsVisible(true);   // Zobrazí částice na první stránce
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{  position: 'absolute', width: '100%', height: '100vh', overflow: 'hidden', zIndex: '1'}}>
      {isVisible && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false }, // Efekt je omezen na výšku a šířku divu
            particles: {
              number: {
                value: 20, // Počet komet
                density: {
                  enable: true,
                  value_area: 500, // Rozložení komet
                },
              },
              fpsLimit: 120,
              move: {
                enable: true,
                speed: 5, // Rychlost komet
                direction: "right", // Směr pohybu komet
                random: true,
                straight: false, // Komety se nebudou pohybovat přímo, ale mohou se mírně vlnit
                out_mode: "out", // Komety zmizí, když doletí mimo obrazovku
                attract: {
                  enable: false,
                },
              },
              shape: {
                type: "circle", // Tvar komet (kruh)
              },
              size: {
                value: 3, // Velikost komet
                random: true,
              },
              opacity: {
                value: 1, // Počáteční průhlednost komet
                animation: {
                  enable: true,
                  speed: 1, // Rychlost změny opacity
                  minimumValue: 0, // Minimální průhlednost při animaci
                  startValue: "max",
                  sync: false,
                },
              },
              color: {
                value: "#ffffff", // Barva komet
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false, // Interaktivita při přejetí myší
                },
                onClick: {
                  enable: false, // Interaktivita při kliknutí
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};

export default SimpleParticles;
