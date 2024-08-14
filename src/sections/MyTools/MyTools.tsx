import { SECTIONS } from "constants/home.constants";

import AnimatedText from "components/AnimatedText";
import Tools from "./Tools";

export default function MyTools() {
    return (
        <section className="my-tools">
            <AnimatedText
                text={SECTIONS.MY_TOOLS}
                className="my-tools__title"
                el="h2"
            />

            <Tools />
        </section>
    );
}
