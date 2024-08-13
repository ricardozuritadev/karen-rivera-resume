import classNames from "classnames";
import { Hobby as HobbyTypes } from "types/hobby.type";

type HobbyProps = {
    hobby: HobbyTypes;
    isSelected: boolean;
    onSelect: () => void;
};

export default function Hobby({ hobby, isSelected, onSelect }: HobbyProps) {
    const { image, alt, title } = hobby;

    const imageClass = classNames("hobby__image", {
        "hobby__image--selected": isSelected
    });

    const titleClass = classNames("hobby__title", {
        "hobby__title--selected": isSelected
    });

    return (
        <div className="hobby" onClick={onSelect}>
            <img className={imageClass} src={image} alt={alt} />
            <p className={titleClass}>{title}</p>
        </div>
    );
}
