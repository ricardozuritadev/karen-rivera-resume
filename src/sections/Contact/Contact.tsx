import { SECTIONS } from "constants/home.constants";

import AnimatedText from "components/AnimatedText";
import MovingCircle from "components/MovingCircle";
import Spacer from "components/Spacer";
import SocialIcons from "components/SocialIcons";

export default function Contact() {
    return (
        <section className="contact">
            <AnimatedText text={SECTIONS.CONTACT.CONTACT_ME} el="h2" />

            <Spacer size="small" />

            <MovingCircle />

            <Spacer size="medium" />

            <SocialIcons />
        </section>
    );
}
