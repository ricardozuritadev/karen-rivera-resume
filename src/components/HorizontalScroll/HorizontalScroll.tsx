import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import AnimatedText from "components/AnimatedText";

type HorizontalScrollProps = {
    title: string;
    children: React.ReactNode;
};

export default function HorizontalScroll({
    title,
    children
}: HorizontalScrollProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0.1, 0.95], ["0%", "-206%"]);

    return (
        <section ref={targetRef} className="horizontal-scroll">
            <div className="horizontal-scroll__container">
                <AnimatedText text={title} el="h2" />
                <motion.div
                    style={{ x }}
                    className="horizontal-scroll__card-container"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
