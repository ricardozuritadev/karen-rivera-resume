import ExperienceCard from "components/ExperienceCard";
import HorizontalScroll from "components/HorizontalScroll";
import { Experience as ExperienceTypes } from "types/experience.type";

type ExperienceProps = {
    sectionTitle: string;
    data: ExperienceTypes[];
};

export default function Experience({ sectionTitle, data }: ExperienceProps) {
    return (
        <section className="experience">
            <HorizontalScroll title={sectionTitle} gap="12rem">
                {data.map(({ images, title, description, company, date }) => (
                    <ExperienceCard
                        key={title}
                        images={images}
                        title={title}
                        description={description}
                        company={company}
                        date={date}
                    />
                ))}
            </HorizontalScroll>
        </section>
    );
}
