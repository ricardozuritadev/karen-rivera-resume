import { SECTIONS } from "constants/home.constants";
import hobbiesData from "data/hobbies.json";

import AnimatedText from "components/AnimatedText";
import Hobbies from "components/Hobbies";
import Hobby from "components/Hobby";

export default function About() {
    return (
        <section className="about">
            <AnimatedText
                text={SECTIONS.WHOAMI.HEADER}
                className="about__title"
                el="h2"
            />
            <AnimatedText
                text={SECTIONS.WHOAMI.SUBHEADER}
                className="about__subtitle"
                el="h4"
            />

            <Hobbies>
                {hobbiesData.map((hobby, index) => (
                    <Hobby key={hobby.id} index={index} {...hobby} />
                ))}
            </Hobbies>
        </section>
    );
}
