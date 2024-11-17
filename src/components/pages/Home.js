import bannerCover from "../../assets/Pictures/backgroundBannerHome.webp"
import { datas } from "../../datas/Datas";
import { Link } from "react-router-dom";
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
                    <Link key={id} to={`/logements/${id}`}>
                        <Card
                            key = {id}
                            id = {id.toString()}
                            title = {title}
                            cover = {cover}
                        />
                    </Link>
                ))}

            </div>
        </>
    )
}