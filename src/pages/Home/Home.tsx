import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import projectsData from "data/projects.json";
import challengesData from "data/challenges.json";

import { SECTIONS } from "constants/home.constants";

import ParticlesContainer from "components/ParticlesContainer/ParticlesContainer";
import Hero from "sections/Hero";
import MyJourney from "sections/MyJourney";
import Projects from "sections/Projects";
import Spacer from "components/Spacer";
import Loading from "pages/Loading";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <Loading />;

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
