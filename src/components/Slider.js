import { useState } from "react";
import "../style/Slider.scss";
import forward from "../assets/icon/forward.svg";
import backward from "../assets/icon/backward.svg";
export default function Slider ({pics, title}) {

    const length = pics.length;
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = function() {
        setActiveIndex((prevIndex)=>
            prevIndex === pics.length -1 ? 0 : prevIndex +1);
    }
    const prevSlide = function() {
        setActiveIndex((prevIndex)=>
            prevIndex === 0 ? pics.length -1 : prevIndex -1);
    }
    return (
        <div className="imgContainer">
            { length > 1 &&
            <div className="arrowsDiv"> 
                <img className="arrows" onClick={prevSlide} src={backward} alt="reculer"/>
                <img className="arrows" onClick={nextSlide} src={forward} alt="avancer" />
            </div>
            }
            { length > 1 && <div className="count"><p>{activeIndex + 1} / {length}</p></div>} 
            <img src={pics[activeIndex]} alt={`${title} ${activeIndex +1}`} />   
        </div>
    );
}