import skillsData from 'data/skills.json';
import { SECTIONS } from 'constants/home.constants';

import AnimatedText from 'components/AnimatedText';
import ChangingText from 'components/ChangingText';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__greeting">{SECTIONS.HERO.HI}</p>

      <div className="hero__animated-text">
        <ChangingText words={skillsData} />
        <AnimatedText
          text={SECTIONS.HERO.DESIGNER}
          className="hero__title hero__title--yellow"
          el="h1"
          once
        />
      </div>
    </section>
  );
}
