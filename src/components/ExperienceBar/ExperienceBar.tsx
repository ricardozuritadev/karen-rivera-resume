import classNames from 'classnames';

type ExperienceBarProps = {
  title: string;
  date: string;
  index: number;
};

export default function ExperienceBar({
  title,
  date,
  index
}: ExperienceBarProps) {
  const borderTopClass = classNames('experience-bar', {
    'experience-bar--border-top': index === 0
  });

  return (
    <div className={`experience-bar ${borderTopClass}`}>
      <p className="experience-bar__title">{title}</p>
      <p className="experience-bar__date">{date}</p>
    </div>
  );
}
