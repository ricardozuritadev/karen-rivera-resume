import { useEffect, useMemo, useState } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { type ISourceOptions } from '@tsparticles/engine';

export default function ParticlesContainer() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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
            mode: ['grab', 'connect']
          }
        },
        modes: {
          grab: {
            links: {
              opacity: 0.4
            },
            distance: 200
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          enable: true,
          color: '#ffffff',
          distance: 100,
          opacity: 0.1,
          width: 0.5
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out'
          },
          random: false,
          speed: 0.2
        },
        number: {
          density: {
            enable: true
          },
          value: 200
        },
        opacity: {
          value: 0
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
        particlesLoaded={async () => {}}
        options={options}
        style={{ position: 'relative' }}
      />
    );
  }

  return null;
}
