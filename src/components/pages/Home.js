import bannerCover from "../../assets/Pictures/backgroundBannerHome.webp"
import { datas } from "../../datas/Datas";
import "../../style/Home.scss";

import Banner from "../Banner";
import Card from "../Card";
export default function Home () {
    return (
        <>
            <Banner imgUrl={bannerCover}>
                <h2><span>Chez vous,</span> <span>partout et ailleurs</span></h2>
            </Banner >
            <div className="grid">
                {datas.map(({id, title, cover})=>(
                    <Card
                        key = {id}
                        id = {id.toString()}
                        title = {title}
                        cover = {cover}
                    />
                ))}

            </div>
        </>
    )
}