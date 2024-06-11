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
    const imageFront = images[0];
    const imageBack = images[1];

    return (
        <div className="experience-card">
            <div className="experience-card__container">
                <div className="experience-card__image-container">
                    <LazyLoadImage
                        className="experience-card__image"
                        alt="Experience front cover image"
                        src={`images/experience/${imageFront}.png`}
                    />
                    <LazyLoadImage
                        className="experience-card__image experience-card__image--second"
                        alt="Experience back cover image"
                        src={`images/experience/${imageBack}.png`}
                    />
                </div>

                <div className="experience-card__info">
                    <h3 className="experience-card__title">{title}</h3>
                    <div className="experience-card__subtitle">
                        <h4>{description}</h4>
                        <p>{company}</p>
                    </div>
                </div>

                <div className="experience-card__line"></div>
            </div>

            <div className="experience-card__date">
                <p>{date}</p>
            </div>
        </div>
    );
}
