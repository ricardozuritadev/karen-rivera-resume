import AnimatedText from "components/AnimatedText";
import { SECTIONS } from "constants/home.constants";

type HobbiesDescriptionsProps = {
    selectedHobby: number;
};

export default function HobbiesDescriptions({
    selectedHobby
}: HobbiesDescriptionsProps) {
    return (
        <div className="hobbies-descriptions">
            <img
                src="images/line-up.png"
                alt="Border line"
                className="hobbies-descriptions__border hobbies-descriptions__border--top"
            />
            <AnimatedText
                text={SECTIONS.WHOAMI.HOBBIES.SINGING}
                className="about__text"
                style={{ transform: `translateY(-${selectedHobby * 100}%)` }}
                speed={0.1}
                el="p"
            />
            <AnimatedText
                text={SECTIONS.WHOAMI.HOBBIES.MOVING}
                className="about__text"
                style={{ transform: `translateY(-${selectedHobby * 100}%)` }}
                speed={0.1}
                el="p"
            />
            <AnimatedText
                text={SECTIONS.WHOAMI.HOBBIES.READING}
                className="about__text"
                style={{ transform: `translateY(-${selectedHobby * 100}%)` }}
                speed={0.1}
                el="p"
            />
            <AnimatedText
                text={SECTIONS.WHOAMI.HOBBIES.PEOPLE}
                className="about__text"
                style={{ transform: `translateY(-${selectedHobby * 100}%)` }}
                speed={0.1}
                el="p"
            />
            <img
                src="images/line-down.png"
                alt="Border line"
                className="hobbies-descriptions__border hobbies-descriptions__border--bottom"
            />
        </div>
    );
}
