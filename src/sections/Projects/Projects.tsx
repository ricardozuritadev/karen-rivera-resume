import projectsData from 'data/projects.json';

import ProjectCard from 'components/ProjectCard';
import HorizontalScroll from 'components/HorizontalScroll';

export default function Projects() {
  return (
    <section className="projects">
      <HorizontalScroll title="projects">
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
