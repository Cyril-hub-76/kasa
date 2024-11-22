import "../style/Logements.scss";
import { useParams, Navigate } from "react-router-dom";
import { datas } from "../datas/Datas";
import starActive from "../assets/icon/star-active.svg";
import starInactive from "../assets/icon/star-inactive.svg";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";
export default function Logements () {

    const {id} = useParams();
    const logement = datas.find((item)=> item.id === id);
    if(!logement){
        return <Navigate to ="/Error.js" />;
    }
    const name = logement.host.name;
    const range = [0,1,2,3,4];
    const value = Number(logement.rating);
    const title = logement.title
    const pictures = logement.pictures;

    return logement && (
        <div className = {`container_${logement.id}`}>
            <Slider
                pics = {pictures}
                title = {title}
            />
            <div className="dataLogementContainer">
                <div className="flexToColumnContainer flex">
                    <div className="containerLeft">
                        <h2>{logement.title}</h2>
                        <span className="location">{logement.location}</span>
                        <div className="tagDiv">
                            {logement.tags.map((tag, index)=>(
                               <span key={index}>{tag}</span> 
                            ))}
                        </div>
                    </div> 
                    <div className="containerRight">
                        <div className="hostContainer flex">
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} alt={`portrait de ${name}`}/>
                        </div>
                        <div className="rateDiv">
                            {
                                range.map((a, index) => (
                                    <span key={index}>{a < value ?  <img className="stars" src={starActive} alt="Étoiles actives" /> : <img className="stars" src={starInactive} alt="Étoiles inactives" />}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="dropdownContainer flex">
                    <Collapse 
                        title = "Description"
                        content={logement.description}
                    />  
                    <Collapse 
                        title= "Équipements"
                        content={logement.equipments.map((equipment, index) =>(
                            <li style={{listStyle: "none"}} key={index}>{equipment}</li>
                        ))}
                    /> 
                </div>
            </div>
        </div>
    ) 
}