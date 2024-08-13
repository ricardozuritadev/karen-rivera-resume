import classNames from "classnames";
import React, { useState } from "react";
import { Hobby as HobbyTypes } from "types/hobby.type";

export default function Hobby({ ...hobby }: HobbyTypes) {
    const [selected, setSetselected] = useState<number>(0);

    const { image, alt, title, index } = hobby;

    const imageClass = classNames({
        hobby__image: true,
        "hobby__image--selected": selected === index
    });

    const titleClass = classNames({
        hobby__title: true,
        "hobby__title--selected": selected === index
    });

    function handleSelect(e: React.MouseEvent<HTMLDivElement>) {
        console.log("=> e.target: ", e.target);
        setSetselected(index);
    }

    return (
        <div className="hobby" onClick={handleSelect}>
            <img className={imageClass} src={image} alt={alt} />
            <p className={titleClass}>{title}</p>
        </div>
    );
}
