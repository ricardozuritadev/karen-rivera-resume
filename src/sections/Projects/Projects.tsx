import projectsData from 'data/projects.json';

import { SECTIONS } from 'constants/home.constants';

import ProjectCard from 'components/ProjectCard';
import HorizontalScroll from 'components/HorizontalScroll';

export default function Projects() {
  return (
    <section className="projects">
      <HorizontalScroll title={SECTIONS.PROJECTS}>
        {projectsData.map(({ title, description, image, tags }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            image={image}
            tags={tags}
          />
        ))}
      </HorizontalScroll>
    </section>
  );
}
