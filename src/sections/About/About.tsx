import { useState } from "react";

import { SECTIONS } from "constants/home.constants";
import hobbiesData from "data/hobbies.json";

import AnimatedText from "components/AnimatedText";
import Hobbies from "components/Hobbies";
import Hobby from "components/Hobby";
import HobbiesDescriptions from "components/HobbiesDescriptions";

export default function About() {
    const [selectedHobby, setSelectedHobby] = useState<number>(0);

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
                    <Hobby
                        key={hobby.id}
                        hobby={hobby}
                        isSelected={selectedHobby === index}
                        onSelect={() => setSelectedHobby(index)}
                    />
                ))}
            </Hobbies>

            <HobbiesDescriptions selectedHobby={selectedHobby} />
        </section>
    );
}
