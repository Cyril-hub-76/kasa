import aboutCover from "../../assets/Pictures/backgroundAbout.webp";
import Collapse from "../Collapse";
import Banner from "../../components/Banner";
import { AboutDatas } from "../../datas/AboutDatas";
import "../../style/About.scss";
export default function About () {
    
    return (
        <>
            <Banner imgUrl={aboutCover} />
            <div className="collapsesContainer">
                {AboutDatas.map(({id, title, content})=>(
                    <Collapse
                        key={id}
                        title={title}
                        content={content}
                    />
                ))}
            </div>
        </>
    )
}