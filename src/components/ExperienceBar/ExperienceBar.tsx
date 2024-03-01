type ExperienceBarProps = {
  title: string;
  date: string;
};

export default function ExperienceBar({ title, date }: ExperienceBarProps) {
  return (
    <div className="experience-bar">
      <p className="experience-bar__title">{title}</p>
      <p className="experience-bar__date">{date}</p>
    </div>
  );
}
