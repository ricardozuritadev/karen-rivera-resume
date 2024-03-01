import { SECTIONS } from 'constants/home.constants';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__text">{SECTIONS.HERO.HI}</p>
      <h1>
        <span>{SECTIONS.HERO.PRODUCT}</span>
        <span className="hero__text--yellow">{SECTIONS.HERO.DESIGNER}</span>
      </h1>
    </section>
  );
}
