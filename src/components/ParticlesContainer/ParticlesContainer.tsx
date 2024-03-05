import { useEffect, useMemo, useState } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { type Container, type ISourceOptions } from '@tsparticles/engine';

export default function ParticlesContainer() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  async function particlesLoaded(container?: Container): Promise<void> {
    console.log(container);
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'none'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble'
          }
        },
        modes: {
          bubble: {
            color: '#ffde30',
            distance: 200,
            duration: 2,
            opacity: 0.5,
            size: 15,
            speed: 3
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 60,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out'
          },
          random: false,
          speed: 0.5,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 350
        },
        opacity: {
          value: 0.01
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 2, max: 10 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ position: 'relative' }}
      />
    );
  }

  return null;
}
