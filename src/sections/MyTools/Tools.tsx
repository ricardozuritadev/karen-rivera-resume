import { Tooltip } from "react-tooltip";

export default function Tools() {
    return (
        <>
            <div className="tools">
                <img
                    src="icons/tools/figma.svg"
                    alt="Figma logo"
                    data-tooltip-id="figma-tooltip"
                />
                <img
                    src="icons/tools/maze.svg"
                    alt="Figma logo"
                    data-tooltip-id="maze-tooltip"
                />
                <img
                    src="icons/tools/lottie.svg"
                    alt="Figma logo"
                    data-tooltip-id="lottie-tooltip"
                />
                <img
                    src="icons/tools/ae.svg"
                    alt="Figma logo"
                    data-tooltip-id="ae-tooltip"
                />
                <img
                    src="icons/tools/ps.svg"
                    alt="Figma logo"
                    data-tooltip-id="ps-tooltip"
                />
                <img
                    src="icons/tools/ai.svg"
                    alt="Figma logo"
                    data-tooltip-id="ai-tooltip"
                />
                <img
                    src="icons/tools/chatgpt.svg"
                    alt="Figma logo"
                    data-tooltip-id="chatgpt-tooltip"
                />
            </div>

            <Tooltip
                id="figma-tooltip"
                place="bottom"
                content="Figma"
                className="tools__tooltip"
            />

            <Tooltip
                id="maze-tooltip"
                place="bottom"
                content="Maze"
                className="tools__tooltip"
            />

            <Tooltip
                id="lottie-tooltip"
                place="bottom"
                content="Lottiefiles"
                className="tools__tooltip"
            />

            <Tooltip
                id="ae-tooltip"
                place="bottom"
                content="After Effects"
                className="tools__tooltip"
            />

            <Tooltip
                id="ps-tooltip"
                place="bottom"
                content="Photoshop"
                className="tools__tooltip"
            />

            <Tooltip
                id="ai-tooltip"
                place="bottom"
                content="Adobe Illustrator"
                className="tools__tooltip"
            />

            <Tooltip
                id="chatgpt-tooltip"
                place="bottom"
                content="AI tools"
                className="tools__tooltip"
            />
        </>
    );
}
