import { LazyLoadImage } from "react-lazy-load-image-component";

type ExperiencecardProps = {
    images: string[];
    title: string;
    description: string;
    company: string;
    date: string;
};

export default function Experiencecard({
    images,
    title,
    description,
    company,
    date
}: ExperiencecardProps) {
    return (
        <div className="experience-card">
            <LazyLoadImage
                className="experience-card__image"
                alt="Experience cover image"
                src={images[0]}
            />

            <div className="experience-card__info">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <p>{company}</p>
            </div>

            <div className="experience-card__date">
                <p>{date}</p>
            </div>
        </div>
    );
}
