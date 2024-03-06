import projectsData from 'data/projects.json';
import challengesData from 'data/challenges.json';

import { SECTIONS } from 'constants/home.constants';

import ParticlesContainer from 'components/ParticlesContainer/ParticlesContainer';
import Hero from 'sections/Hero';
import MyJourney from 'sections/MyJourney';
import Projects from 'sections/Projects';
import Spacer from 'components/Spacer';

export default function Home() {
  return (
    <div className="home">
      <ParticlesContainer />
      <Hero />
      <Projects sectionTitle={SECTIONS.PROJECTS} data={projectsData} />
      <Spacer />
      <Projects sectionTitle={SECTIONS.CHALLENGES} data={challengesData} />
      <Spacer />
      <MyJourney />
    </div>
  );
}
