import { useState } from "react";
import arrowIcon from "../../src/assets/icon/arrow.svg";
import "../style/Collapse.scss";

export default function Collapse({id, title, content}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                <div id={id} className={isOpen ? "active" : "container"}>
                    <h4 className={"topBarCollapse"}>{title} <img src={arrowIcon} alt="button" className={isOpen ? "down" : "up"} onClick={()=> setIsOpen((isOpen) => !isOpen)}/></h4>
                    <p className="content">
                        {content}
                    </p>
                </div>
            }
        </>
    )
}