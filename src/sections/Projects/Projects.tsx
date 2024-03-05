import { Project } from 'types/project.type';

import ProjectCard from 'components/ProjectCard';
import HorizontalScroll from 'components/HorizontalScroll';

type ProjectsProps = {
  sectionTitle: string;
  data: Project[];
};

export default function Projects({ sectionTitle, data }: ProjectsProps) {
  return (
    <section className="projects">
      <HorizontalScroll title={sectionTitle}>
        {data.map(({ title, description, image, tags }) => (
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
