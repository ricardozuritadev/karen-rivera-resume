type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  tags
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__info">
        <img
          className="project-card__image"
          src={image}
          alt="Project cover image"
        />
        <div>
          <h3>{title}</h3>
          <h4>{description}</h4>
          {tags.map((tag, index) => (
            <span key={tag}>
              {index > 0 ? ' |' : ''} {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
