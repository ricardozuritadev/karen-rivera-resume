import Hero from 'sections/Hero';
import MyJourney from 'sections/MyJourney';
import Projects from 'sections/Projects';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Projects />
      <MyJourney />
    </div>
  );
}
