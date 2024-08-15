import classNames from "classnames";

type SpacerProps = {
    size?: "small" | "medium" | "large";
};

export default function Spacer({ size = "medium" }: SpacerProps) {
    const spacerClass = classNames("spacer", {
        [`spacer--${size}`]: size
    });

    return <div className={spacerClass}></div>;
}
