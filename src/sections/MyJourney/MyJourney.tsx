import { SECTIONS } from 'constants/home.constants';
import journey from 'data/journey.json';

import ExperienceBar from 'components/ExperienceBar';

export default function MyJourney() {
  return (
    <section className="my-journey">
      <h2 className="my-journey__title">{SECTIONS.MY_JOURNEY}</h2>
      {journey.map((item, index) => (
        <ExperienceBar key={item.id} index={index} {...item} />
      ))}
    </section>
  );
}
