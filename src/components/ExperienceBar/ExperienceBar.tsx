import classNames from 'classnames';
import { ExperienceDetails } from 'types/experience-details.type';

type ExperienceBarProps = {
  title: string;
  date: string;
  details: ExperienceDetails[];
  index: number;
};

export default function ExperienceBar({
  title,
  date,
  details,
  index
}: ExperienceBarProps) {
  const borderTopClass = classNames('experience-bar', {
    'experience-bar--border-top': index === 0
  });

  return (
    <div className={`experience-bar ${borderTopClass}`}>
      <p className="experience-bar__title">{title}</p>
      <p className="experience-bar__date">{date}</p>

      <div className="experience-bar__details">
        {details.map((detail, detailIndex) => {
          const detailsSeparatorClass = classNames(
            'experience-bar__details-text',
            {
              'experience-bar__details-text--separator':
                detailIndex !== details.length - 1
            }
          );

          return (
            <div
              key={detailIndex}
              className={`experience-details ${detailsSeparatorClass}`}
            >
              <p className="experience-details__title" key={detail.title}>
                {detail.title}
              </p>
              <p className="experience-details__school" key={detailIndex}>
                {detail.school.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
      <div className="experience-bar__background"></div>
    </div>
  );
}
