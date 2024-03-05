import { SECTIONS } from 'constants/home.constants';
import journey from 'data/journey.json';

import AnimatedText from 'components/AnimatedText';
import ExperienceBar from 'components/ExperienceBar';

export default function MyJourney() {
  return (
    <section className="my-journey">
      <AnimatedText
        text={SECTIONS.MY_JOURNEY}
        className="my-journey__title"
        el="h2"
      />

      {journey.map((item, index) => (
        <ExperienceBar key={item.id} index={index} {...item} />
      ))}
    </section>
  );
}
