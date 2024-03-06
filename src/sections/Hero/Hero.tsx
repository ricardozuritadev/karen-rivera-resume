import skillsData from 'data/skills.json';
import { SECTIONS } from 'constants/home.constants';

import ChangingText from 'components/ChangingText';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__greeting">{SECTIONS.HERO.HI}</p>

      <ChangingText words={skillsData} />
    </section>
  );
}
